import Link from 'next/link';
import Layout from 'components/Layout';
import Head from 'next/head';
import { request } from 'lib/datocms';
import { Image } from 'react-datocms';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BLOG_QUERY = `query Blog {
  allPosts(orderBy: _publishedAt_DESC) {
    id
    publishDate
    title
    slug
    content
    description
    image {
      responsiveImage(imgixParams: { fit: crop, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: BLOG_QUERY,
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const containterVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 1.1,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog" direction="column">
      <Head>
        <title>Blog | Andreas Lindberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={containterVariants}
        initial="hidden"
        animate="visible"
      >
        {data.allPosts.map((post) => (
          <Post variants={childVariants} key={post.id}>
            <Link href="/blog/:slug" as={`/blog/${post.slug}`}>
              <Img
                whileHover={{ scale: 0.99, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image data={post.image.responsiveImage} />
              </Img>
            </Link>
            <Link href="/blog/:slug" as={`/blog/${post.slug}`}>
              <Title
                whileHover={{ scale: 1.05, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {post.title}
              </Title>
            </Link>
            <Date>Published: {post.publishDate}</Date>
            <motion.p>{post.description}</motion.p>
          </Post>
        ))}
      </motion.div>
    </Layout>
  );
};

const Post = styled(motion.div)`
  max-width: 960px;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  margin: 20px;
  border-bottom: 2px solid salmon;
  cursor: default;

  :nth-last-child(1) {
    border-bottom: none;
  }
`;

const Img = styled(motion.div)`
  cursor: pointer;
`;

const Date = styled(motion.p)`
  font-size: 12px;
  font-style: italic;
  margin-bottom: 20px;
`;

const Title = styled(motion.h1)`
  font-family: 'Oswald', sans-serif;
  margin: 5px 0;
  cursor: pointer;
`;

export default Blog;

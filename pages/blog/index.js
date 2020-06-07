import Link from "next/link";
import Layout from "components/Layout";
import Head from "next/head";
import { request } from "lib/datocms";
import { Image } from "react-datocms";
import { motion } from "framer-motion";
import styled from "styled-components";

const BLOG_QUERY = `query Blog {
  allPosts {
    id
    publishDate
    title
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

const PostVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog" direction="column">
      <Head>
        <title>Blog | Andreas Lindberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.allPosts.map((post) => (
        <Post
          key={post.id}
          variants={PostVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href="/blog/:slug" as={`/blog/${post.id}`}>
            <Img
              variants={childVariants}
              initial="hidden"
              animate="visible"
              data={post.image.responsiveImage}
            />
          </Link>
          <Link href="/blog/:slug" as={`/blog/${post.id}`}>
            <Title
              variants={childVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {post.title}
            </Title>
          </Link>
          <Date variants={childVariants} initial="hidden" animate="visible">
            Published: {post.publishDate}
          </Date>
          <motion.p variants={childVariants} initial="hidden" animate="visible">
            {post.description}
          </motion.p>
        </Post>
      ))}
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

const Img = styled(Image)`
  cursor: pointer;
`;

const Date = styled(motion.p)`
  font-size: 12px;
  font-style: italic;
  margin-bottom: 20px;
`;

const Title = styled(motion.h1)`
  font-family: "Oswald", sans-serif;
  margin: 5px 0;
  cursor: pointer;
`;

export default Blog;

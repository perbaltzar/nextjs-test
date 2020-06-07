import Layout from "components/Layout";
import { request } from "lib/datocms";
import { getAllPostsWithSlug, getPostData } from "lib/posts";
import { markdownToHtml } from "lib/markdownToHtml";
import { Image } from "react-datocms";
import styled from "styled-components";
import { useRouter } from "next/router";

const Hej = ({ post }) => {
  //   const router = useRouter();
  //   if (!router.isFallback && !post?.slug) {
  //     return <ErrorPage statusCode={404} />;
  //   }

  console.log(post);

  return (
    <Layout pageTitle="Blog" direction="column">
      <SPost key={post.id}>
        <Image data={post.image.responsiveImage} />
        <Link href="/blog/:slug" as={`/blog/${post.id}`}>
          <Title>{post.title}</Title>
        </Link>
        <Date>Published: {post.publishDate}</Date>
        <p>{post.title}</p>
      </SPost>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug);
  const content = await markdownToHtml(data?.post?.content || "");

  return {
    props: {
      post: {
        ...data?.post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  };
}

const SPost = styled.div`
  max-width: 960px;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  margin: 20px;
`;

const Date = styled.p`
  font-size: 12px;
  font-style: italic;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  border-bottom: 2px solid #111216;
  margin-bottom: 5px;
`;

export default Hej;

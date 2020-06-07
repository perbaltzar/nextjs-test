// import Layout from "components/Layout";
// import { request } from "lib/datocms";
// import { Image } from "react-datocms";
// import styled from "styled-components";
// import { useRouter } from "next/router";

// export async function getStaticProps({ params }) {
//   const router = useRouter();
//   const slug = router.query.slug;
//   const data = await request(
//     `
//     query POSTQUERY(slug: String!) {
//         post(filter: {id: {eq: ${slug}}) {
//             content
//             image {
//             responsiveImage(imgixParams: { fit: crop, auto: format }) {
//                 srcSet
//                 webpSrcSet
//                 sizes
//                 src
//                 width
//                 height
//                 aspectRatio
//                 alt
//                 title
//                 base64
//                 }
//             }
//             publishDate
//             title
//         }
//     }
//     `,
//     {
//       slug: params.slug,
//     }
//   );
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

// export async function getStaticPaths() {
//   const posts = await request(
//     `
//         data {
//             id
//         }
//     `
//   );

//   return {
//     paths: posts.map(({ slug }) => ({
//       params: { slug },
//     })),
//     fallback: false,
//   };
// }

// const Hej = ({ data }) => {
//   const router = useRouter();
//   console.log(router.query.slug);
//   console.log(data);

//   return (
//     <Layout pageTitle="Blog" direction="column">
//       {/* {data.allPosts.map((post) => ( */}
//       <SPost key={post.id}>
//         <Image data={post.image.responsiveImage} />
//         <Link href="/blog/:slug" as={`/blog/${post.id}`}>
//           <Title>{post.title}</Title>
//         </Link>
//         <Date>Published: {post.publishDate}</Date>
//         <p>{post.description}</p>
//       </SPost>
//       {/* ))} */}
//     </Layout>
//   );
// };

// const SPost = styled.div`
//   max-width: 960px;
//   height: min-content;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   padding: 20px;
//   margin: 20px;
// `;

// const Date = styled.p`
//   font-size: 12px;
//   font-style: italic;
//   margin-bottom: 20px;
// `;

// const Title = styled.h1`
//   font-family: "Oswald", sans-serif;
//   border-bottom: 2px solid #111216;
//   margin-bottom: 5px;
// `;

// export default Hej;

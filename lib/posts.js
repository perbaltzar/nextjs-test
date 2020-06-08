import { request } from './datocms';

export async function getAllPostsWithSlug() {
  const data = request(`
    {
      allPosts {
        slug
      }
    }
  `);
  return data?.allPosts;
}

export async function getPostData(slug) {
  const data = await request(
    `
        query POSTQUERY(slug: String!) {
            post(filter: {id: {eq: $slug}) {
                content
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
                publishDate
                title
                slug
            }
        }
        `,
    {
      slug: params.slug,
    },
    {
      variables: {
        slug,
      },
    }
  );
  return {
    data, // will be passed to the page component as props
  };
}

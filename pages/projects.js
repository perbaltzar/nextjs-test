import Layout from 'components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { request } from 'lib/datocms';
import { Image } from 'react-datocms';

const containterVariants = {
  hidden: {
    opacity: 0,
    y: '100vh',
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

const Projects = ({ data }) => {
  return (
    <Layout pageTitle="Projects" direction="column">
      <Head>
        <title>Projects | Andreas Lindberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={containterVariants}
        initial="hidden"
        animate="visible"
      >
        {data.allProjects.map((project) => (
          <Project variants={childVariants} key={project.id}>
            {project.image && <Image data={project.image.responsiveImage} />}
            <Title>{project.title}</Title>
            <SubHeading>Description: </SubHeading>
            <p style={{ marginBottom: '10px' }}>{project.description}</p>

            {project.liveLink && (
              <A
                whileHover={{ scale: 1.05, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                href={project.liveLink}
              >
                &#8594; See project live
              </A>
            )}
            <A
              whileHover={{ scale: 1.05, originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              href={project.githubLink}
            >
              &#8594; See code on GitHub
            </A>
            <p
              style={{
                marginBottom: '10px',
                fontStyle: 'italic',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                }}
              >
                Language:
              </span>{' '}
              {project.language}
            </p>
          </Project>
        ))}
      </motion.div>
    </Layout>
  );
};

const PROJECT_QUERY = `query ProjectQuery {
  allProjects(orderBy: _createdAt_DESC) {
    id
    githubLink
    liveLink
    language
    title
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
    query: PROJECT_QUERY,
  });
  return {
    props: { data },
  };
}

const Project = styled(motion.div)`
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
  font-family: 'EB Garamond', serif;

  :nth-last-child(1) {
    border-bottom: none;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Oswald', sans-serif;
  margin: 5px 0;
  border-bottom: 2px solid #f1f4ff;
`;

const SubHeading = styled(motion.h3)`
  margin-bottom: 10px;
  font-family: 'Oswald', sans-serif;
`;

const A = styled(motion.a)`
  color: #f1f4ff
  font-size: 1.5rem;
  padding: 5px 0;
  text-decoration: none;
  :visited {
    color: #f1f4ff
  }
`;

export default Projects;

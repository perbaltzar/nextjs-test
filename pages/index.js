import Head from 'next/head';
import Layout from 'components/Layout';

import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function Home() {
  return (
    <Layout pageTitle="oaflindberg">
      <Head>
        <title>Andreas Lindberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Title
          initial={{ opacity: 0, x: '-100vw', y: '-100vh' }}
          animate={{ opacity: 1, x: '-5vw', y: 20 }}
          transition={{ type: 'spring', stiffness: 30 }}
        >
          andreas
        </Title>
        <Title
          initial={{ opacity: 0, x: '100vw', y: '100vh' }}
          animate={{ opacity: 1, x: '6vw', y: -20 }}
          transition={{ type: 'spring', stiffness: 30, delay: 0.4 }}
        >
          lindberg
        </Title>
      </motion.div>
    </Layout>
  );
}

const Title = styled(motion.h1)`
  font-size: 4.5em;
  margin: 5px 0;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  cursor: default;
  user-select: none;
  text-shadow: #1b3c80 1px 1px, #1b3c80 2px 2px, #1b3c80 3px 3px,
    #1b3c80 4px 4px, #1b3c80 5px 5px, #f1f4ff 6px 6px;

  @media (min-width: 1024px) {
    font-size: 14em;
    margin: -60px 0;
  }
`;

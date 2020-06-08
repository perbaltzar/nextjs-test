import Layout from 'components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Layout pageTitle="Contact" direction="column">
      <Head>
        <title>Contact | Andreas Lindberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title
        initial={{ opacity: 0, y: '100vh' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        EMAIL
      </Title>
      <Option
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 80, delay: 0.5 }}
      >
        oaflindberg@yahoo.com
      </Option>
      <Title
        initial={{ opacity: 0, y: '-100vh' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 80, delay: 1 }}
      >
        SOCIAL MEDIA
      </Title>
      <OptionsContainer>
        <Option
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 1.5 }}
        >
          asdf
        </Option>
        <Option
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 1.7 }}
        >
          asdf
        </Option>
        <Option
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 2 }}
        >
          asdf
        </Option>
      </OptionsContainer>
    </Layout>
  );
};

const Title = styled(motion.h1)`
  max-width: 960px;
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  border-bottom: 2px solid salmon;

  @media (min-width: 1024px) {
    font-size: 5.6rem;
  }
`;

const OptionsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  width: 90vw;

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

const Option = styled(motion.h1)`
  max-width: 960px;
  font-family: 'Oswald', sans-serif;
  font-size: 2.3rem;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export default Contact;

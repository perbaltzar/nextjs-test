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
        <A
          whileHover={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200 }}
          href="https://facebook.com/oaflindberg"
        >
          <SocialMedia
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, delay: 1.5 }}
          >
            Facebook
          </SocialMedia>
        </A>
        <A
          whileHover={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200 }}
          href="https://twitter.com/oaflindberg"
        >
          <SocialMedia
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, delay: 1.7 }}
          >
            Twitter
          </SocialMedia>
        </A>
        <A
          whileHover={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200 }}
          href="https://instagram.com/oaflindberg"
        >
          <SocialMedia
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, delay: 2 }}
          >
            Instagram
          </SocialMedia>
        </A>
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
    width: 60vw;
  }
`;

const A = styled(motion.a)`
  color: #f1f4ff;
  text-decoration: none;
  transition: 200ms ease;

  &:visited {
    color: #f1f4ff;
  }

  &:hover {
    color: #f1f4ff;
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

const SocialMedia = styled(motion.h1)`
  max-width: 960px;
  font-family: 'Oswald', sans-serif;
  font-size: 1.7rem;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export default Contact;

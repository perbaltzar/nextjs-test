import Layout from "components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import styled from "styled-components";

const Custom404 = () => {
  return (
    <Layout direction="row" pageTitle="404">
      <Head>
        <title>404 | Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Error
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        404
      </Error>
      <Error
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
      >
        |
      </Error>
      <Error
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 1 }}
      >
        Page Not Found
      </Error>
    </Layout>
  );
};

const Error = styled(motion.h1)`
  font-family: "Oswald", sans-serif;
  font-weight. 300;
  margin: 0 5px;
  font-size: 2.3rem;
  cursor: default;

  @media (min-width: 1024px) { 
    font-size: 5rem;
    margin: 0 20px;
}
`;

export default Custom404;

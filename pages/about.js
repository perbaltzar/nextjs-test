import Layout from "components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import styled from "styled-components";

const About = () => {
  return (
    <Layout pageTitle="About" direction="column">
      <Head>
        <title>About | Andreas Lindberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title
        initial={{ opacity: 0, scale: [0.1, 1.1], y: "-100vh" }}
        animate={{ opacity: 1, scale: [1, 0.5], y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        Hi there!
      </Title>
      <Info
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 60, delay: 1 }}
      >
        My name is Andreas and I'm a 28 year old web dev student born in{" "}
        <A Amal href="https://www.imdb.com/title/tt0150662/?ref_=nv_sr_srsg_0">
          Fucking Åmål
        </A>
        , living in Gothenburg, Sweden. I'm currently studying web development
        at <A href="https://yrgo.se">Yrgo</A>
      </Info>
      <Info
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 60, delay: 1.5 }}
      >
        I started studying at <A href="https://yrgo.se">Yrgo</A> in the fall,
        2019. So far, we've studied PHP, Laravel, HTML, CSS, Vanilla JavaScript,
        React, NodeJS, SQL and it's probably the best descision I've ever made
        because I'm having so much fun learning to code.
      </Info>
      <Info
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 60, delay: 2 }}
      >
        I first got in to web development when I was a bit younger and started
        playing around with HTML and CSS. Unfortunately for me, I stopped
        playing around with it because I felt that I didn't make any progress.
      </Info>
    </Layout>
  );
};

const Info = styled(motion.p)`
  max-width: 960px;
  padding: 10px 0;
  font-family: "EB Garamond", serif;
  font-size: 18px;
  letter-spacing: 2px;
`;

const Title = styled(motion.h1)`
  font-size: 5em;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  cursor: default;
`;

const A = styled.a`
  text-decoration: none;
  color: ${(props) => (props.Amal ? "#174234" : "#f52b3b")};
  cursor: pointer;

  &:visited {
    color: ${(props) => (props.Amal ? "#174234" : "#f52b3b")};
  }
`;

export default About;

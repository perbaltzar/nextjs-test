import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState("-100");

  return (
    <div>
      <Burger
        whileHover={{ scale: 1.1, originX: 0 }}
        onClick={() => setOpen((prevValue) => (prevValue ? 0 : -100))}
      >
        <Line />
        <Line />
        <Line />
      </Burger>
      <SMenu
        initial={{ x: "-100vw" }}
        animate={{ x: open + "vw" }}
        transition={{ type: "spring", stiffness: 60, damping: 13 }}
      >
        <Close
          whileHover={{ scale: 1.1, originX: 0 }}
          onClick={() => setOpen((prevValue) => (prevValue ? 0 : -100))}
        >
          ×
        </Close>
        <Li
          whileHover={{
            scale: 1.15,
            originX: 0,
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link href="/">
            <A>Home</A>
          </Link>
        </Li>
        <Li
          whileHover={{
            scale: 1.15,
            originX: 0,
            color: "#1b3c80",
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link href="/projects">
            <A>Projects</A>
          </Link>
        </Li>
        <Li
          whileHover={{
            scale: 1.15,
            originX: 0,
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link href="/about">
            <A>About</A>
          </Link>
        </Li>
        <Li
          whileHover={{
            scale: 1.15,
            originX: 0,
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link href="/blog">
            <A>Blog</A>
          </Link>
        </Li>
      </SMenu>
    </div>
  );
};

const SMenu = styled(motion.div)`
  position: absolute;
  top: 0;
  display: flex;
  width: max-content;
  padding: 0 5em;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  background: #f1f4ff;
  color: #111216;
  text-align: left;
  z-index: 999;

  @media (min-width: 1024px) {
    padding: 0 10em;
  }
`;

const Burger = styled(motion.div)`
  padding-left: 20px;
  width: min-content;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 30px;
  justify-content: space-evenly;
`;

const Line = styled.div`
  width: 20px;
  height: 2px;
  background: #f1f4ff;
  border-radius: 2px;
`;

const Li = styled(motion.li)`
  list-style-type: none;
  color: #111216;
`;

const Close = styled(motion.p)`
  position: absolute;
  top: 5px;
  font-weight: normal;
  font-size: 3rem;
  left: 15px;
  color: #111216;
  cursor: pointer;
`;

const A = styled.a`
  font-size: 18px;
  text-transform: uppercase;
  text-align: left;
  text-decoration: none;
  color: #111216;
  cursor: pointer;

  &:visited {
    color: #111216;
  }

  &[aria-current="page"] {
    color: #333332;
    font-weight: bold;
    transform: scale(1.2);
  }
`;

export default Menu;

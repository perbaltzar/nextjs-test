import styled from "styled-components";
import { motion } from "framer-motion";
import Menu from "./Menu";

const Header = ({ headertext }) => {
  return (
    <SHeader>
      <Menu />
      <motion.h1 style={{ paddingRight: "20px" }}>{headertext}</motion.h1>
    </SHeader>
  );
};

const SHeader = styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 40px;
  font-family: "Oswald", sans-serif;
  font-weight: normal;
  cursor: default;
`;

export default Header;

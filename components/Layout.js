import Header from "./Header";
import styled from "styled-components";

const Layout = ({ children, pageTitle, bgImg, direction }) => {
  return (
    <StyledLayout bgimg={bgImg}>
      <Header headertext={pageTitle} />
      <Content direction={direction}>{children}</Content>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  display: flex;
  padding: 0 20px;
  min-height: calc(95vh - 80px);
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  font-family: "EB Garmond", serif;
`;

export default Layout;

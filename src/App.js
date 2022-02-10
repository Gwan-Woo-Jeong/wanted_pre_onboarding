import styled, { createGlobalStyle } from "styled-components";
import AutoComplete from "./components/AutoComplete";
import ClickToEdit from "./components/ClickToEdit";
import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Tag from "./components/Tag";
import Toggle from "./components/Toggle";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin : 0;
  }
  body{
    font-family: "Helvetica", "Arial", sans-serif;
    height: 100%;
    overflow: auto;
  }
  html {
    height: 100%;
    overflow: hidden;
  }
  `;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(Centered)`
  position: relative;
  flex-direction: column;
  padding: 30px;
  & > div:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 300px;
  border: 1px solid #c5c5c5;
  border-radius: 10px;
`;

export const Title = styled.div`
  position: absolute;
  margin: 10px 15px;
  font-size: 20px;
  font-weight: 800;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Toggle />
        <Modal />
        <Tab />
        <Tag />
        <AutoComplete />
        <ClickToEdit />
      </Wrapper>
    </>
  );
}

export default App;

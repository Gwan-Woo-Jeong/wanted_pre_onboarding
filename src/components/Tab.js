import React, { useState } from "react";
import styled from "styled-components";
import { Container, Title } from "../App";

const Header = styled.div`
  margin-top: 20px;
  margin-left: 10%;
  width: 90%;
  height: 50px;
  background-color: #d3d1d1;
  display: flex;
  padding-left: 30px;
`;

const Tabs = styled.div`
  cursor: pointer;
  flex: 1 1 100%;
  padding: 10px;
  color: ${(props) => (props.isOn ? "#ffffff" : "#828282")};
  background: ${(props) => (props.isOn ? "#4900ce" : "#d3d1d1")};
  transition: background 0.3s, color 0.3s;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Tab() {
  const [isOneOn, setIsOneOn] = useState(true);
  const [isTwoOn, setIsTwoOn] = useState(false);
  const [isThreeOn, setIsThreeOn] = useState(false);

  const reset = () => {
    setIsOneOn(false);
    setIsTwoOn(false);
    setIsThreeOn(false);
  };

  const oneOn = () => {
    reset();
    setIsOneOn(true);
  };

  const twoOn = () => {
    reset();
    setIsTwoOn(true);
  };

  const threeOn = () => {
    reset();
    setIsThreeOn(true);
  };

  const getText = () => {
    if (isOneOn) return "ONE";
    if (isTwoOn) return "TWO";
    if (isThreeOn) return "THREE";
  };

  return (
    <Container>
      <Title>Tab</Title>
      <Header>
        <Tabs isOn={isOneOn} onClick={oneOn}>
          Tab1
        </Tabs>
        <Tabs isOn={isTwoOn} onClick={twoOn}>
          Tab2
        </Tabs>
        <Tabs isOn={isThreeOn} onClick={threeOn}>
          Tab3
        </Tabs>
      </Header>
      <Content>Tab Menu {getText()}</Content>
    </Container>
  );
}

import React, { useState } from "react";
import styled from "styled-components";
import { Centered, Container } from "../App";
import { Title } from "../App";

const Button = styled.span`
  cursor: pointer;
  padding: 15px;
  border-radius: 30px;
  background-color: #4900ce;
  font-size: 14px;
  color: white;
`;

const Background = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const PopUp = styled.div`
  background-color: white;
  width: 300px;
  height: 150px;
  border-radius: 20px;
  padding: 10px;
  cursor: default;
`;

const CloseButton = styled.span`
  cursor: pointer;
  position: absolute;
  left: 50%;
`;

const Text = styled.span`
  color: #4900ce;
`;

export default function Modal() {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const preventClick = (e) => {
    e.stopPropagation();
  };
  const showModal = () => {
    if (visible) {
      return (
        <Background onClick={hide}>
          <Wrapper>
            <PopUp onClick={preventClick}>
              <CloseButton onClick={hide}>X</CloseButton>
              <Centered>
                <Text>HELLO CODESTATES!</Text>
              </Centered>
            </PopUp>
          </Wrapper>
        </Background>
      );
    }
    return null;
  };

  return (
    <Container>
      {showModal()}
      <Title>Modal</Title>
      <Centered>
        <Button onClick={show}>Open Modal</Button>
      </Centered>
    </Container>
  );
}

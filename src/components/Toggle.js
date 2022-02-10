import React, { useState } from "react";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import { Container, Title } from "../App";

const Switch = styled.div`
  position: relative;
  width: 100px;
  height: 45px;
  background-color: #c5c5c5;
  border-radius: 50px;
  margin-bottom: 15px;
  overflow: hidden;
`;

const buttonAnim = (toggle) => {
  if (toggle) {
    return keyframes`0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(55px);
    }`;
  } else {
    return keyframes`0% {
        transform: translateX(55px);
    }
    100% {
        transform: translateX(0px);
    }`;
  }
};

const barAnim = (toggle) => {
  if (toggle) {
    return keyframes`0% {
        width: 0px;
    }
    100% {
        width: 100px;
    }`;
  } else {
    return keyframes`0% {
        width: 100px;
    }
    100% {
        width: 0px;
    }`;
  }
};

const btnSlide = (toggle) => css`
  animation: ${buttonAnim(toggle)} 0.3s linear;
  animation-fill-mode: forwards;
`;

const barSlide = (toggle) => css`
  animation: ${barAnim(toggle)} 0.3s linear;
  animation-fill-mode: forwards;
`;

const Button = styled.div`
  cursor: pointer;
  position: absolute;
  margin: 5px;
  background-color: white;
  height: 35px;
  width: 35px;
  border-radius: 50px;
  ${(props) => props.isClicked && btnSlide(props.toggle)}
  z-index: 2;
`;

const Bar = styled(Switch)`
  width: 0px;
  position: absolute;
  background-color: #4900ce;
  z-index: 1;
  border-radius: 0px;
  ${(props) => props.isClicked && barSlide(props.toggle)}
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function Toggle() {
  const [toggle, setToggle] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleSwitch = () => {
    setIsClicked(true);
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <Container>
      <Title>Toggle</Title>
      <Content>
        <Switch>
          <Button
            onClick={toggleSwitch}
            toggle={toggle}
            isClicked={isClicked}
          />
          <Bar toggle={toggle} isClicked={isClicked} />
        </Switch>
        Toggle Switch {toggle ? "ON" : "OFF"}
      </Content>
    </Container>
  );
}

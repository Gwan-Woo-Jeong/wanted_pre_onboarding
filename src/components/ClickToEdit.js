import React, { useRef, useState } from "react";
import { useCallback } from "react/cjs/react.development";
import styled from "styled-components";
import { Container, Title } from "../App";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const InputItem = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  margin-bottom: 25px;
`;

const Input = styled.input`
  border: 1px solid #d3d1d1;
  padding: 8px;
  flex-grow: 1;
  text-align: center;
`;

const InputTitle = styled.div`
  margin-right: 15px;
  white-space: nowrap;
`;

export default function ClickToEdit() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState("20");
  const changeName = useCallback((e) => setName(e.target.value), []);
  const changeAge = useCallback((e) => setAge(e.target.value), []);

  return (
    <Container>
      <Title>ClickToEdit</Title>
      <Content>
        <InputItem>
          <InputTitle>이름</InputTitle>
          <Input defaultValue={name} onBlur={changeName} ref={nameRef} />
        </InputItem>
        <InputItem>
          <InputTitle>나이</InputTitle>
          <Input defaultValue={age} onBlur={changeAge} ref={ageRef} />
        </InputItem>
        {name && `이름 ${name}`} {age && `나이 ${age}`}
      </Content>
    </Container>
  );
}

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Centered, Container, Title } from "../App";
import { Input } from "./Tag";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 20px;
`;

const InputBox = styled.div`
  border: 1px solid #d3d1d1;
  border-radius: 20px;
  width: 95%;
  height: 50px;
  display: flex;
  ${(props) =>
    props.found &&
    `border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;`}
`;

const Delete = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  font-weight: 600;
  font-size: 20px;
  color: #828282;
`;

const TextInput = styled(Input)`
  font-size: 18px;
  background-color: transparent;
  padding-left: 20px;
`;

const Found = styled.ul`
  position: absolute;
  width: 95%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid #d3d1d1;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  top: 50px;
`;

const Items = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 5px 20px;
  &:hover {
    background-color: #d3d1d1;
  }
`;

export default function AutoComplete() {
  const list = ["refurbished", "rustic", "antique", "vintage", "중고A급"];
  const [found, setFound] = useState([]);
  const [input, setInput] = useState("a");
  const inputRef = useRef(null);

  useEffect(() => {
    if (input.length > 0) {
      const match = list.filter((each) =>
        each.toLowerCase().includes(input.toLowerCase())
      );
      setFound(match);
    } else {
      setFound([]);
    }
  }, [input]);

  const onChange = (e) => setInput(e.target.value);

  const mapItems = () =>
    found.map((each, i) => (
      <Items key={i} onClick={() => clickItem(each)}>
        {each}
      </Items>
    ));

  const clearInput = () => {
    setInput("");
    setFound([]);
    inputRef.current.value = "";
  };

  const clickItem = (value) => {
    inputRef.current.value = value;
    setInput(value);
  };

  return (
    <Container>
      <Title>AutoComplete</Title>
      <Centered>
        <Wrapper>
          <InputBox found={found.length}>
            <TextInput
              defaultValue={input}
              ref={inputRef}
              onChange={onChange}
            />
            {input.length > 0 && <Delete onClick={clearInput}>x</Delete>}
          </InputBox>
          {found.length > 0 && <Found>{mapItems()}</Found>}
        </Wrapper>
      </Centered>
    </Container>
  );
}

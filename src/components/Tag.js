import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { Centered, Container, Title } from "../App";

export const Content = styled.div`
  display: flex;
  width: 450px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.isFocused ? "#4900ce" : "#d3d1d1")};
  padding: 10px;
  overflow: auto;
`;

const EachTag = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #4900ce;
  color: #ffffff;
  margin-right: 5px;
  white-space: nowrap;
`;

const Delete = styled.span`
  cursor: pointer;
  background-color: #ffffff;
  color: #4900ce;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  padding-left: 1px;
  margin-left: 8px;
`;

export const Input = styled.input`
  padding: 5px;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 16px;
`;

export default function Tag() {
  const [tags, setTags] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const onKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter" && e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        inputRef.current.value = "";
      }
    },
    [tags]
  );

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const onDelete = (idx) => {
    setTags(
      tags.filter((_, i) => {
        return idx !== i;
      })
    );
  };

  const mapTags = () =>
    tags.map((title, idx) => (
      <EachTag key={idx + 1}>
        {title} <Delete onClick={() => onDelete(idx)}>x</Delete>
      </EachTag>
    ));

  return (
    <Container>
      <Title>Tag</Title>
      <Centered>
        <Content isFocused={isFocused}>
          {mapTags()}
          <Input
            onKeyPress={onKeyPress}
            ref={inputRef}
            placeholder="Pree enter to add tags"
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </Content>
      </Centered>
    </Container>
  );
}

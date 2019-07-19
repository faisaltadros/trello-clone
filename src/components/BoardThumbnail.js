import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 100px;
  width: 180px;
  background: rgba(27, 27, 27, 0.753);
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: solid rgb(87, 154, 255) 1px;
`;

const Title = styled.h4`
  color: white;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;

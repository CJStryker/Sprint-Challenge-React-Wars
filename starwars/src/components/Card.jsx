import React from "react";
import styled from "styled-components";

const Cardstyle = styled.div`
  background: white;
  width: 400px;
  margin: auto;
  padding: 10px;
  border-bottom: 3px solid green;
`;

export default function Card(props) {
  return (
    <Cardstyle>
      <h1>{props.person.name}</h1>
      <p>Birth Year: {props.person.birth_year}</p>
      <p>Height: {props.person.height}</p>
      <p>Mass: {props.person.mass}</p>
    </Cardstyle>
  );
}

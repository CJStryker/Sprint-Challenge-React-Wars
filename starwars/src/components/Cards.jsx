import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";

const Divstyle = styled.div`
  background: white;
  width: 500px;
  margin: auto;
  padding: 10px;
  border: 3px solid red;
`;

export default function Cards() {
  const [state, setState] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setState(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (!state) {
    return <h1>Loading...</h1>;
  }

  return (
    <Divstyle>
      {state.map((person, index) => {
        return <Card key={index} person={person} />;
      })}
    </Divstyle>
  );
}

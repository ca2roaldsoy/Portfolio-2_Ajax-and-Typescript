import React from "react";
import CharacterDetails from "./CharacterDetails";
import Title from "../title/Title";
import CardDeck from "react-bootstrap/CardDeck";

function Character() {
  return (
    <>
      <Title title="Amiibo Figure" role="heading" />
      <CharacterDetails />
    </>
  );
}

export default Character;

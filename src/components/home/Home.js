import React, { useEffect, useState } from "react";
import { AmiiboUrl } from "../../constants/api";
import CardDeck from "react-bootstrap/CardDeck";
import Title from "../title/Title";
import Search from "./Search";
import AmiiboCharacter from "./AmiiboCharacter";
import Loader from "../spinner/Loader";

function Home() {
  const [amiibos, setAmiibos] = useState([]);
  const [filterAmiibos, setFilterAmiibos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(AmiiboUrl)
      .then((response) => response.json())
      .then((json) => {
        setAmiibos(json.amiibo);
        setFilterAmiibos(json.amiibo);
        setLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // filter search input
  const handleInput = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filterArr = amiibos.filter(function (amiibo) {
      if (amiibo.character.toLowerCase().indexOf(inputValue) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    setFilterAmiibos(filterArr);
  };

  //console.log(filterAmiibos);
  const ambi = filterAmiibos.filter(
    (name) =>
      name.tail.includes("00000002") || // Mario
      name.tail.includes("00010002") || // Peach
      name.tail.includes("00020002") || // Yoshi
      name.tail.includes("000c0002") || // Luigi
      name.tail.includes("02620102") || // Rosalina
      name.tail.includes("00140002") || // Bowser
      name.tail.includes("001a0002") || // Wario
      name.tail.includes("00030002") || // Donkey Kong
      name.tail.includes("000d0002") || // Diddy Kong
      name.tail.includes("00380102") || // Toad
      name.tail.includes("02660102") || // Daisy
      name.tail.includes("02670102") || // Waluigi
      name.tail.includes("00040002") || // Link
      name.tail.includes("000e0002") // Zelda
  );

  if (loading) {
    return <Loader />;
  }

  function searchResult() {
    if (ambi.length === 0) {
      return (
        <section className="errorMsg">
          <h4>Sorry. No result :( </h4>
          <p className="tryAgain">Please try another search :)</p>
        </section>
      );
    }

    // Map over amiibos displayed
    return ambi.map((amibo) => {
      const { character, image, tail } = amibo;

      return (
        <AmiiboCharacter key={tail} id={tail} name={character} image={image} />
      );
    });
  }

  return (
    <>
      <Title title="Character" role="heading" />
      <Search handleInput={handleInput} role="search" />
      <CardDeck as="main" role="main">
        {searchResult()}
      </CardDeck>
    </>
  );
}

export default Home;

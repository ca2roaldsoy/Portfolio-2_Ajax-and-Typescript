import React, { useEffect, useState } from "react";
import { AmiiboUrl } from "../../constants/api";
import CardDeck from "react-bootstrap/CardDeck";
import Title from "../../constants/title";
import Search from "./Search";
import Spinner from "react-bootstrap/Spinner";
import AmiiboCharacter from "./AmiiboCharacter";

function Home() {
  const [amiibos, setAmiibos] = useState([]);
  const [filterAmiibos, setFilterAmiibos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(AmiiboUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json.amiibo);
        setAmiibos(json.amiibo);
        setFilterAmiibos(json.amiibo);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // filter search input
  const handleInput = e => {
    const inputValue = e.target.value.toLowerCase();
    const filterArr = amiibos.filter(function(amiibo) {
      if (amiibo.character.toLowerCase().indexOf(inputValue) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    setFilterAmiibos(filterArr);
  };

  // loading
  if (loading) {
    return <Spinner />;
  }

  function searchResult() {
    if (filterAmiibos.length === 0) {
      return (
        <section className="errorMsg">
          <h4>Sorry. No result :( </h4>
          <p className="tryAgain">Please try another search :)</p>
        </section>
      );
    }
    // Map over amiibos displayed
    return filterAmiibos.map(amiibo => {
      const { amiiboSeries, character, image, tail } = amiibo;

      return (
        <AmiiboCharacter
          key={tail}
          name={character}
          image={image}
          game={amiiboSeries}
        />
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
      ;
    </>
  );
}

export default Home;

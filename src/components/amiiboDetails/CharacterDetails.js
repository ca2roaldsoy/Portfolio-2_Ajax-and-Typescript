import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AmiiboUrl } from "../../constants/api";
import Loader from "../spinner/Loader";

function CharacterDetail() {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  const url = AmiiboUrl + "?name=" + name;

  useEffect(
    function () {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setDetail(json);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    },
    [url]
  );

  if (loading) {
    return <Loader />;
  }

  //console.log(detail.amiibo);

  return detail.amiibo.map((d, i) => {
    const { character, gameSeries, image } = d;

    console.log(image);

    return (
      <div key={i}>
        <h1>{character}</h1>
        <p>{gameSeries}</p>
        <img src={image} alt={character} />
      </div>
    );
  });
}

export default CharacterDetail;

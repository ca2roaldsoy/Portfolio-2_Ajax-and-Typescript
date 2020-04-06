import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AmiiboUrl } from "../../constants/api";
import Loader from "../spinner/Loader";
import { Carousel } from "react-responsive-carousel";
import Title from "../title/Title";

function CharacterDetail() {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { character } = useParams();

  const url = AmiiboUrl + "?character=" + character;

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

  return (
    <>
      <Title title="Amiibo Figure" role="heading" />
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        {detail.amiibo.map((d, i) => (
          <div key={i}>
            <p>
              <b>{d.name}</b>
            </p>
            <p>{d.amiiboSeries}</p>
            <img src={d.image} alt={d.name} />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default CharacterDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AmiiboUrl } from "../../constants/api";
import Loader from "../spinner/Loader";
import { Carousel, CarouselItem } from "react-bootstrap";
import CarouselCaption from "react-bootstrap/CarouselCaption";

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
    <Carousel>
      {detail.amiibo.map((d, i) => (
        <CarouselItem key={i}>
          <img src={d.image} alt={d.name} />
          <CarouselCaption>
            <h4>{d.name}</h4>
            <p>{d.amiiboSeries}</p>
          </CarouselCaption>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

export default CharacterDetail;

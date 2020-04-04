import React from "react";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";

function DetailPage({ name, image, game }) {
  return (
    <CarouselItem>
      <img src={image} alt={name} className="d-block w-30" />
      <CarouselCaption>
        <h3>{name}</h3>
        <p>{game}</p>
      </CarouselCaption>
    </CarouselItem>
  );
}

export default DetailPage;

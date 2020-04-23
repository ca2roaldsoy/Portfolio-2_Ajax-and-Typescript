import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AmiiboUrl } from "../../constants/api";
import Loader from "../spinner/Loader";
import { Tabs, Tab } from "react-bootstrap";

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
    <Tabs defaultActiveKey={detail.amiibo.name} variant="pills">
      {detail.amiibo.map((d, i) => (
        <Tab
          key={i}
          eventKey={i}
          title={d.name}
          className="text-center mt-5 [ figure ]"
          as="section"
        >
          <h3 className="[ figure__name ]">{d.name}</h3>
          <p className="[ figure__game ]">{d.amiiboSeries}</p>
          <img
            src={d.image}
            alt={d.name}
            className="[ figure__img ]"
            role="image"
          />
        </Tab>
      ))}
    </Tabs>
  );
}

export default CharacterDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AmiiboUrl } from "../../constants/api";
import Spinner from "../../constants/spinner";

function CharacterDetail() {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  const url = AmiiboUrl + "?name=" + name;

  useEffect(
    function() {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setDetail(json);
          setLoading(false);
        })
        .catch(error => console.log(error));
    },
    [url]
  );

  if (loading) {
    return <Spinner />;
  }

  console.log(detail.amiibo);
  return (
    <div>
      <h1>{detail.amiibo[0].character}</h1>
      <p>{detail.amiibo[0].gameSeries}</p>
    </div>
  );
}

export default CharacterDetail;

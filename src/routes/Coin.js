import axios from "axios";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const url = `${process.env.REACT_APP_API_COIN_URL}${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>{coin.id}</h1>
    </div>
  );
};

export default Coin;

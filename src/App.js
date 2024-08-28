import React, { useState, useEffect } from "react";
import axios from "axios";

import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
function App() {
  const [coins, setCoins] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Coins coins={coins} />
    </>
  );
}

export default App;

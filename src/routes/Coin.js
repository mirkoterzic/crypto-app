import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Coin.css";

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
  }, [url]); // Added 'url' as a dependency

  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image ? (
                <img src={coin.image.small} alt={coin.name} />
              ) : null}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className="coin-price">
              {coin.market_data?.current_price?.usd ? (
                <h1>${coin.market_data.current_price.usd}</h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency
                    ?.usd ?? "N/A"}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency
                    ?.usd ?? "N/A"}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency
                    ?.usd ?? "N/A"}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency
                    ?.usd ?? "N/A"}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency
                    ?.usd ?? "N/A"}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency
                    ?.usd ?? "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                <p>{coin.market_data?.low_24h?.usd ?? "N/A"}</p>
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                <p>{coin.market_data?.high_24h?.usd ?? "N/A"}</p>
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                <p>{coin.market_data?.market_cap?.usd ?? "N/A"}</p>
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                <p>{coin.market_data?.circulating_supply ?? "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p>{coin.description?.en ?? "No description available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;

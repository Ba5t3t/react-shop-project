import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";

import { ShopContext } from "../context";

import { Preloader } from "./Preloader";
import { Goods } from "./Goods";
import { Cart } from "./Cart";
import { Basket } from "./Basket";
import { Alert } from "./Alert";

export function Shop() {
  const { loading, order, showBasket, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: "391877d4-1255070f-0a3d9384-47005bac",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <Goods />}
      {showBasket && <Basket />}
      {alertName && <Alert />}
    </main>
  );
}

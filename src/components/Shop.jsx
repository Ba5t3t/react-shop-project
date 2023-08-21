import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { Goods } from "./Goods";
import { Cart } from "./Cart";
import { Basket } from "./Basket";
import { Alert } from "./Alert";

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [showBasket, setShowBasket] = useState(false);
  const [alertName, setAlertName] = useState("");

  function addToBasket(item) {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  }

  function removeFromBasket(itemId) {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  }

  function clearBasket() {
    setOrder([]);
  }

  function increment(itemId) {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  }

  function decrement(itemId) {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  }

  function handleShowBasket() {
    setShowBasket(!showBasket);
  }

  function closeAlert() {
    setAlertName("");
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: "391877d4-1255070f-0a3d9384-47005bac",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop && data.shop);
      })
      .catch((err) => {
        console.error(`Some error occured: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleShowBasket={handleShowBasket} />
      {loading ? (
        <Preloader />
      ) : (
        <Goods goods={goods} addToBasket={addToBasket} />
      )}
      {showBasket && (
        <Basket
          order={order}
          handleShowBasket={handleShowBasket}
          removeFromBasket={removeFromBasket}
          increment={increment}
          decrement={decrement}
          clearBasket={clearBasket}
        />
      )}
      {alertName && <Alert displayName={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

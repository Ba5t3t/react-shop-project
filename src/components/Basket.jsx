import { BasketItem } from "./BasketItem";

export function Basket(props) {
  const {
    order = [],
    handleShowBasket = Function.prototype,
    removeFromBasket = Function.prototype,
    increment,
    decrement,
    clearBasket = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);
  console.log(order);
  return (
    <ul className='collection basket'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            removeFromBasket={removeFromBasket}
            increment={increment}
            decrement={decrement}
            {...item}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>Общая стоимость: {totalPrice} </li>
      <li className='collection-item active'>
        <div className='basket-footer'>
          <button className='btn btn-small'>Оформить заказ</button>{" "}
          <button
            className='btn-small deep-orange darken-3'
            onClick={clearBasket}
          >
            Очистить корзину
          </button>
        </div>
      </li>
      <i className='material-icons basket-close' onClick={handleShowBasket}>
        close
      </i>
    </ul>
  );
}

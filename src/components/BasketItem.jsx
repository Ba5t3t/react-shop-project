export function BasketItem(props) {
  const {
    mainId,
    displayName,
    price: { finalPrice },
    quantity,
    removeFromBasket = Function.prototype,
    increment = Function.prototype,
    decrement = Function.prototype,
  } = props;

  return (
    <li className='collection-item'>
      {displayName} x{" "}
      <i
        className='material-icons basket-quantity'
        onClick={() => decrement(mainId)}
      >
        remove
      </i>{" "}
      {quantity}{" "}
      <i
        className='material-icons basket-quantity'
        onClick={() => increment(mainId)}
      >
        add
      </i>{" "}
      = {finalPrice * quantity} у.е.
      <span
        className='secondary-content'
        onClick={() => removeFromBasket(mainId)}
      >
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
}

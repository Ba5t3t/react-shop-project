export function Cart(props) {
  const { quantity = 0, handleShowBasket = Function.prototype } = props;

  return (
    <div className='cart teal lighten-1 white-text' onClick={handleShowBasket}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}

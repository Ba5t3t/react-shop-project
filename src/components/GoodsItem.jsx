import { useContext } from "react";
import { ShopContext } from "../context";

export function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { finalPrice },
    displayAssets,
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className='card-item'>
      <div className='card-image'>
        <img src={displayAssets[0].background} alt={displayName} />
      </div>

      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p>{displayDescription}</p>
      </div>

      <div className='card-action'>
        <button className='btn'>{finalPrice}</button>
        <button
          className='btn right'
          onClick={() =>
            addToBasket({ mainId, displayName, price: { finalPrice } })
          }
        >
          Купить
        </button>
      </div>
    </div>
  );
}

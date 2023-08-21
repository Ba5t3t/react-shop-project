import { GoodsItem } from "./GoodsItem";

export function Goods(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  return (
    <div className='goods'>
      {goods.length ? (
        goods.map((item) => (
          <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
        ))
      ) : (
        <h4>Nothing here</h4>
      )}
    </div>
  );
}

// 0 == false
// 1 == true

import { useContext } from "react";
import { ShopContext } from "../context";
import { GoodsItem } from "./GoodsItem";

export function Goods() {
  const { goods = [] } = useContext(ShopContext);

  return (
    <div className='goods'>
      {goods.length ? (
        goods.map((item) => <GoodsItem key={item.mainId} {...item} />)
      ) : (
        <h4>Nothing here</h4>
      )}
    </div>
  );
}

// 0 == false
// 1 == true

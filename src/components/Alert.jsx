import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

export function Alert() {
  const { alertName: displayName = "", closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [displayName]);

  return (
    <div id='toast-container'>
      <div className='toast'>{displayName} добавлен(а) в корзину!</div>
    </div>
  );
}

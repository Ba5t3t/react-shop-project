import { useEffect } from "react";

export function Alert(props) {
  const { displayName = "", closeAlert = Function.prototype } = props;

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

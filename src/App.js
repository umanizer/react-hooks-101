import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const double = () => setCount(prev => prev * 2)
  const divide3 = () => setCount(prev =>prev % 3 === 0 ? prev/3 : prev)
  return (
    <>
      <div>count : {count}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>×2</button>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;

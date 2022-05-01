import { useState } from "react";

import Content from "./Content";

function ReactMemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrease1 = () => {
    setCount(count + 1);
  };

  const handleIncrease2 = () => {
    setCount2(count2 + 1);
  }

  return (
    <div styled={{ padding: "10px 32px" }}>
      <Content count={count} />
      <h2>{count}</h2>
      <button onClick={handleIncrease1}>Click me 1!!!</button>
      <button onClick={handleIncrease2}>Click me 2!!!</button>
    </div>
  );
}

export default ReactMemo;

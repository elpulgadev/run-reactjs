import React from "react";

function Content({ onIncrease }) {
  console.log("re-render");

  return (
    <>
      <h2>Hello ReactJS</h2>
      <button onClick={onIncrease}>Click me!!!</button>
    </>
  );
}

export default React.memo(Content);

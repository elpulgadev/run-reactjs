import React from "react";

function Content({ count }) {
  console.log("re-render");

  return <h1>Hello ReactJS {count}</h1>;
}

export default React.memo(Content);

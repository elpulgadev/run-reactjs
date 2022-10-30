import { useState } from "react";

import Content from "./Content";

function UseEffectThree() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <Content />
    </div>
  );
}

export default UseEffectThree;

import { useState, useEffect } from "react";

function UseEffectPreviewAvatar() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log(`Mounted or re-render lần ${count}`);

    return () => {
      console.log(`Cleanup lần ${count}`);
    };
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!!!</button>
    </>
  );
}

export default UseEffectPreviewAvatar;

import { useState, useRef, useEffect } from "react";

function UseRef() {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const prevCount = useRef();

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;

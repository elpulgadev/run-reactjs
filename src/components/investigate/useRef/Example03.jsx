import { useState, useRef, useEffect } from "react";

function UseRef() {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

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

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;

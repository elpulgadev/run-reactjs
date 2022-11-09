import { useState, useCallback } from "react";

function UseRef() {
  const [text, setText] = useState("Some text ...");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  const ref = useCallback((node) => {
    if (!node) return;

    const { width } = node.getBoundingClientRect();

    document.title = `Width:${width}`;
  }, []);

  return (
    <div>
      <input type="text" value={text} onChange={handleOnChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}

export default UseRef;

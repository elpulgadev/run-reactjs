import ReactDOM from "react-dom";

import { useState, useEffect } from "react";

const modalRoot = document.getElementById("modal-root");

function Modal({ children }) {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.append(el);
  }, [el]);

  useEffect(() => {
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
}

function Portals() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <div onClick={handleClick}>
      <p>Number of clicks: {clicks}</p>
      <p>
        Open up the browser DevTools to observe that the button is not a child
        of the div with the onClick handler.
      </p>
      <Modal>
        <Child />
      </Modal>
    </div>
  );
}

function Child() {
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

export default Portals;

// Catching an event bubbling up from a portal in a parent component allows the development of more flexible abstractions that are not inherently reliant on portals. For example, if you render a <Modal /> component, the parent can capture its events regardless of whether it’s implemented using portals.

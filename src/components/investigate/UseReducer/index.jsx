import { useReducer } from "react";

const initialState = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw Error("Invalid action");
  }
};

function Index() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ margin: "10px 32px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>UP</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
    </div>
  );
}

export default Index;

















// thích hợp để sử dụng với object hoặc aray phức tạp, component có nhiều state, các state có liên quan đến nhau

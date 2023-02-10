import { counterMachine } from "./counterMachine";
import { useMachine } from "@xstate/react";

function App() {
  const [state, send] = useMachine(counterMachine);

  return (
    <>
      <h1>Counter</h1>
      <h2>{state.context.count}</h2>
      <button onClick={() => send("INCREMENT")}>Increment</button>
      <button onClick={() => send("DECREMENT")}>Decrement</button>
    </>
  );
}

export default App;

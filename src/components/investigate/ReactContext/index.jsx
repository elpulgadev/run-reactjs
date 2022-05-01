import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { useContext } from "react";

function ReactContext() {
  const context = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div style={{ padding: 20 }}>
        <button onClick={context.toggleTheme}>Toggle theme</button>
      </div>
    </ThemeProvider>
  );
}

export default ReactContext;

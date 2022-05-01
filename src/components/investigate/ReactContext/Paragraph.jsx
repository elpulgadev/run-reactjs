import { useContext } from "react";
import { ThemeContext } from "./../ReactContext/ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);

  return <p className={context.theme}>Context providers a way...</p>;
}

export default Paragraph;

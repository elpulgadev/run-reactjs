import { useRef } from "react";

import Video from "./Video";

function UseImperativeHandle() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <Video ref={videoRef} />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause} style={{ marginLeft: "5px" }}>Pause</button>
      </div>
    </>
  );
}

export default UseImperativeHandle;

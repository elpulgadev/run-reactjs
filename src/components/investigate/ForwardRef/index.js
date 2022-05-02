import { useRef } from "react";

import Video from "./Video";

function ForwardRef() {
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

export default ForwardRef;

// bình thường truyền ref cho react dom element thì có thể lấy được ref, chứ truyền cho function component thì k thể lấy được ref vì function component không có ref
// ==> react cung cấp higher order component giúp forward được ref từ component cha xuống component con

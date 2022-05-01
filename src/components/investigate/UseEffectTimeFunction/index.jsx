import { useState } from "react";

function UseEffectTimeFunction() {
  const [avatar, setAvatar] = useState();

  const handlePreviewAvatar = (event) => {
    const file = event.target.files[0];

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };

  return (
    <>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img width="80%" src={avatar.preview} alt="" />}
    </>
  );
}

export default UseEffectTimeFunction;






























// import { useState, useEffect } from "react";

// function UseEffectTimeFunction() {
//   const [countDown, setCountDown] = useState(180);

//   useEffect(() => {
//     setInterval(() => {
//       setCountDown((prevState) => prevState - 1);
//     }, 1000);
//   }, []);

//   return <h1>{countDown}</h1>;
// }

// export default UseEffectTimeFunction;

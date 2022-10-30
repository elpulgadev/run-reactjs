import { useState, useEffect } from "react";

function Content() {
  const [avatar, setAvatar] = useState();

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    const urlObject = URL.createObjectURL(file);

    console.log(urlObject);

    setAvatar(urlObject);
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar);
    };
  }, [avatar]);

  return (
    <>
      <div>
        <input type="file" onChange={handlePreviewAvatar} />
      </div>
      {avatar && <img src={avatar} width="80%" alt="" />}
    </>
  );
}

export default Content;

// cleanup luôn được gọi trước khi callback được gọi (trừ lần mounted)

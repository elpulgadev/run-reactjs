import { useState } from "react";

// example 1:

// const order = [4, 6, 8];

// function UseState() {
//   console.log("total...");

//   const [count, setCount] = useState(() => {
//     return order.reduce((total, current) => {
//       console.log("reduce...");

//       return total + current;
//     });
//   });

//   const handleIncrease = () => {
//     setCount((prevState) => prevState + 1);
//   };

//   return (
//     <div style={{ padding: "10px 32px" }}>
//       <h1>{count}</h1>
//       <button onClick={handleIncrease}>Click Me!!!</button>
//     </div>
//   );
// }

// export default UseState;

// component được re-render sau khi setState
// Initial state chỉ được dùng cho lần đầu
// set state với callback
// initial state với callback
// set state là thay thế state bằng giá trị mới

// example 2:

function UseState() {
  const [information, setInformation] = useState({
    name: "Leo",
    age: 28,
  });

  const handleIncrease = () => {
    setInformation({ ...information, bio: "ABCDF" });
  };

  return (
    <div style={{ padding: "10px 32px" }}>
      <h1>{JSON.stringify(information)}</h1>
      <button onClick={handleIncrease}>Update Infomation</button>
    </div>
  );
}

export default UseState;

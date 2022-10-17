import { useState } from "react";

import Content from "./Content";

function ReactMemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrease1 = () => {
    setCount(count + 1);
  };

  const handleIncrease2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div styled={{ padding: "10px 32px" }}>
      <Content count={count} />
      <h2>{count}</h2>
      <button onClick={handleIncrease1}>Click me 1!!!</button>
      <button onClick={handleIncrease2}>Click me 2!!!</button>
    </div>
  );
}

export default ReactMemo;

// Nguyên lý hoạt động của memo: nó nhận vào 1 component, check các props của component sau mỗi lần re-render có bị thay đổi không ==> nếu có ít nhất 1 props thay đổi giá trị ==> cho component re-render ==> và ngược lại
// Memo sử dụng toán tử === để so sánh
// Tình huống áp dụng ==> component cha nhiều state ==> component con mà không cần dùng đến state đó ==> dùng Memo ==> để tránh bị re-render khi component cha re-render

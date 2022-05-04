import { useState, useLayoutEffect } from "react";

function UseLayoutEffect() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default UseLayoutEffect;

// khi count được set thành 4
// ==> component re-render lại
// ==> chạy xuống useEffect
// ==> thấy count thay đổi
// ==> chưa vội chạy vào callback
// ==> sau khi đưa react element vào DOM thật
// ==> mới đi vào callback
// ==> check thấy count > 3
// ==> setState
// ==> sẽ bị chớp
// ==> dùng useLayoutEffect để fix

// so sánh useEffect vào useLayoutEffect
// useEffect
// 1. cập nhật lại state
// 2. cập nhật DOM (mutated)
// 3. render lại UI
// 4. gọi cleanup nếu deps thay đổi
// 5. gọi useEffect callback (sync)
// useLayoutEffect
// 1. cập nhật lại state
// 2. cập nhật lại DOM (mutated)
// 3. gọi cleanup nếu deps thay đổi (sync)
// 4. gọi useLayoutEffect callback (sync)
// 5. render lại UI

// mutated: nó sẽ sữa property trong cái object đó thui ==> ở ngoài vẫn vậy ==> bên trong thì thay đổi nhỏ

// ==> bao giờ gặp tình huống set state ==> check state đó trong useEfect ==> set lại chính nó ==> dễ dàng xảy ra tình trạng chớp nhoáng
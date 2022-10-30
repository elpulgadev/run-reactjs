import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];

function UseEffectTwo() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    console.log("useEffect...");

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("re-render...");

  return (
    <div>
      {tabs.map((tab, index) => {
        return (
          <button
            style={
              type === tab ? { color: "#fff", backgroundColor: "#333" } : {}
            }
            key={index}
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        );
      })}
      <input onChange={(event) => setTitle(event.target.value)} value={title} />
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title || post.name}</li>;
        })}
      </ul>
      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}
    </div>
  );
}

export default UseEffectTwo;

// có 3 vấn đề cần quan tâm
// 1. cách listen DOM event trong react component
// 2. vấn đề xảy ra khi listen DOM event là gì?
// 3. cách khắc phục

// khi người dùng cuộn xuống ==> setShowGoToTop ==> sẽ gọi liên tục ==> liệu component có bị re-render lại liên tục không ==> không (nhưng state vẫn bị thay đổi nhé)
// vì react sử dụng toán tử === để so sánh giá trị được set vào so với giá trị trước đó
// ==> nếu khác nhau mới re-render lại component
// khi làm react hầu như component của chúng ta có thể mount hoặc unmount bới thao tác của người dùng
// trong trường hợp này addEventListener sẽ được mount khi toogle
// ==> sau đó unmount sau khi toogle
// ==> nhưng addEventListener vẫn còn
// ==> vì đó là phạm vi window (chỉ mất khi tắt tab ở trình duyệt đi)
// ==> đang bị rò rỉ bộ nhớ ==> tức là để trong bộ nhớ 1 thứ không bao giờ dùng nữa, nếu mount lại sẽ tạo ra đối tượng mới ==> addEventListener trong component đã bị unmount sẽ không bao giờ được dùng lại
// ==> tức là vẫn để trong bộ nhớ những thứ không dùng được nữa
// warning tình huống khi component đã bị unmount nhưng vẫn lắng nghe sự kiện vào setState
// cleannup function sẽ được gọi trước khi component unmounted ==> giúp ta có thể dọn dẹp những thứ trong bộ nhớ trước khi component unmount

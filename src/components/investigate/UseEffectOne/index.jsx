import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];

function UseEffect() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    console.log("useEffect...");

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

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
    </div>
  );
}

export default UseEffect;

// phải hiểu rõ được từng cái nhỏ trong component thì làm việc mới tốt được
// tại sao in ra 1 lần, 2 lần, nhiều lần ==> phải làm chủ được nó thì làm việc mới tốt
// sử dụng toán tử === để kiểm tra deps có thay đổi hay không

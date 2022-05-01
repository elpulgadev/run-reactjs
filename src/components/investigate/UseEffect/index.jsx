import { useState, useEffect } from "react";

function UseEffect() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <input onChange={(event) => setTitle(event.target.value)} value={title} />
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseEffect;





















// Events: add / remove event listener
// Observer pattern: subcribe / unsubcribe
// Closure
// Timers: setInterval, setTimeoutsetTimeout, clearInterval, clearTimeout
// useState
// Mounted, unmounted
// Call API

// 1. Update DOM
// 2. Call APIAPI
// 3. Listen DOM event
// 	- Scroll
// 	- Resize
// 4. Cleanup
// 	- Remove listener / unsubscribe
// - Clear time

// 1. useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
//  - chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps]);
//  - callback chỉ được gọi lại mỗi khi deps thay đổi

// Callback luôn được gọi sau khi component mounted

// React có component React StrictMode
// ==> veryfy lại code ==> để warning những tình huống code không tốt
// ==> chỉ hoạt động trong môi trường development ==> dù call api để ngoài useEffect
// ==> bị call 2 lần nhưng lên trên production cũng không bị

// khi call API trong useEffect thì useEffect mục đích là để support call API nên sẽ không bị call API 2 lần

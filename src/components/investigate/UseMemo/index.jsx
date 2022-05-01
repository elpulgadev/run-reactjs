import { useState, useMemo } from "react";

function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);

  const onChangeName = (event) => {
    console.log("onChangeName...");

    setName(event.target.value);
  };

  const handleSubmit = () => {
    setProduct([
      ...product,
      {
        name,
        price: parseInt(price),
      },
    ]);
  };

  const total = useMemo(() => {
    return product.reduce((result, p) => {
      console.log("total...");

      return result + p.price;
    }, 0);
  }, [product]);

  console.log("UseMemo...");

  return (
    <div style={{ padding: "10px 32px" }}>
      <input onChange={onChangeName} value={name} placeholder="Enter name..." />
      <br />
      <input
        onChange={(event) => setPrice(event.target.value)}
        value={price}
        placeholder="Enter price..."
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {product.map((p, index) => {
          return (
            <li key={index}>
              {p.name} - {p.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseMemo;

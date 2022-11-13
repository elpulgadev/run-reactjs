import * as React from "react";

const TODOS = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];

const fetchData = () => {
  return { data: TODOS, isLoading: true };
};

const HigherOrderComponent = () => {
  const { data, isLoading } = fetchData();

  if (isLoading) return <div>Loading data.</div>;
  if (!data) return <div>No data loaded yet.</div>;
  if (!data.lengt) return <div>Data is empty.</div>;

  return <TodoList data={data} />;
};

const TodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const TodoItem = ({ item }) => {
  return (
    <li>
      {item.task} {item.completed.toString()}
    </li>
  );
};

export default HigherOrderComponent;

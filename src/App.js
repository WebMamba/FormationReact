import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Clock from "./components/Clock";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((tasks) => setTodoList(tasks))
      .catch((res) => console.log(res));
  }, []);

  const handleAddItem = (newItem) => {
    setTodoList([...todoList, newItem]);
  };

  const handleDrop = (reorderedList) => {
    setTodoList(reorderedList);
  };

  const handleDelete = (id) => {
    setTodoList([...todoList].filter((item) => item.id !== id));
  };

  const handleCheck = (id) => {
    console.log(id);
  };

  return (
    <Layout>
      <Clock />
      <TodoForm onAddItem={handleAddItem} />
      <TodoList
        list={todoList}
        onDrop={handleDrop}
        onDelete={handleDelete}
        onCheck={handleCheck}
      />
    </Layout>
  );
}

export default App;

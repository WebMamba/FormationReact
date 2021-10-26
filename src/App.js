import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Clock from "./components/Clock";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { item1, item2, item3 } from "./fixtures/item_fixtures";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList([item1, item2, item3]);
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

  return (
    <Layout>
      <Clock />
      <TodoForm onAddItem={handleAddItem} />
      <TodoList list={todoList} onDrop={handleDrop} onDelete={handleDelete} />
    </Layout>
  );
}

export default App;

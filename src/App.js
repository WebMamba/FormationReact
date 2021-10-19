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

  return (
    <Layout>
      <Clock />
      <TodoForm onAddItem={handleAddItem} />
      <TodoList list={todoList} />
    </Layout>
  );
}

export default App;

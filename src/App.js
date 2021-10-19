import Layout from "./components/Layout";
import Clock from "./components/Clock";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { item1, item2, item3 } from "./fixtures/item_fixtures";

function App() {
  return (
    <Layout>
      <Clock />
      <TodoForm />
      <TodoList list={[item1, item2, item3]} />
    </Layout>
  );
}

export default App;

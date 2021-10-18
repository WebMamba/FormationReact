import TodoList from ".";
import { item1, item2, item3 } from "../../fixtures/item_fixtures";

export default {
  title: "Components/TodoList",
  component: TodoList,
};

export const ThreeItems = () => <TodoList list={[item1, item3, item2]} />;

export const Empty = () => <TodoList list={[]} />;

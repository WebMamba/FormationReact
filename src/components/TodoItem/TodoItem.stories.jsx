import TodoItem from ".";

export default {
  title: "Components/TodoItem",
  component: TodoItem,
};

export const NotValided = () => (
  <TodoItem title="Faire une react App" datetime={new Date()} />
);

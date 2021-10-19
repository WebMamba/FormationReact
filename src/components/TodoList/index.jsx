import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";
import PropTypes from "prop-types";

export default function TodoList(props) {
  const { list } = props;

  if (list.length === 0) {
    return <p className={styles.empty_text}>Rien à faire aujourd'hui</p>;
  }

  return (
    <>
      {list.map((item) => (
        <TodoItem
          key={item.title}
          title={item.title}
          datetime={item.datetime}
        />
      ))}
    </>
  );
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
};

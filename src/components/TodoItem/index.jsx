import { useEffect } from "react";
import styles from "./TodoItem.module.css";
import CheckBox from "../CheckBox";
import { useState } from "react";
import PropTypes from "prop-types";

export default function TodoItem(props) {
  const [taskId, setTaskId] = useState();
  const [date, setDate] = useState();
  const { task, onCheck } = props;

  const handleCheck = () => {
    onCheck(taskId);
  };

  useEffect(() => {
    setDate(new Date(task.datetime));
    setTaskId(task.id);
  }, [task]);

  return (
    <div
      data-testid="todo-item"
      className={`${styles.container} ${task.check ? styles.checked : ""}`}
    >
      <div>
        <h5 className={styles.title}>{task.title}</h5>
        {date && (
          <p className={styles.caption}>
            Ajouté le {date.getDay()}/{date.getMonth()} à {date.getHours()}h
          </p>
        )}
      </div>
      <CheckBox checked={task.check} onCheck={handleCheck} />
    </div>
  );
}

TodoItem.propTypes = {
  task: PropTypes.object,
  onCheck: PropTypes.func,
};

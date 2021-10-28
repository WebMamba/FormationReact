import { useEffect } from "react";
import styles from "./TodoItem.module.css";
import CheckBox from "../CheckBox";
import { useState } from "react";
import PropTypes from "prop-types";

export default function TodoItem(props) {
  const [date, setDate] = useState();
  const { task, onCheck } = props;

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    onCheck();
  };

  useEffect(() => {
    setChecked(task.check);
    setDate(new Date(task.datetime));
  }, []);

  return (
    <div
      data-testid="todo-item"
      className={`${styles.container} ${checked ? styles.checked : ""}`}
    >
      <div>
        <h5 className={styles.title}>{props.task.title}</h5>
        {date && (
          <p className={styles.caption}>
            Ajouté le {date.getDay()}/{date.getMonth()} à {date.getHours()}h
          </p>
        )}
      </div>
      <CheckBox checked={checked} onCheck={handleCheck} />
    </div>
  );
}

TodoItem.propTypes = {
  task: PropTypes.object,
  onCheck: PropTypes.func,
};

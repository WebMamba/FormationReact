import styles from "./TodoItem.module.css";
import CheckBox from "../CheckBox";
import { useState } from "react";

export default function TodoItem(props) {
  const { title, datetime } = props;

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div
      data-testid="todo-item"
      className={`${styles.container} ${checked ? styles.checked : ""}`}
    >
      <div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.caption}>
          Ajouté le {datetime.getDay()}/{datetime.getMonth()} à{" "}
          {datetime.getHours()}h
        </p>
      </div>
      <CheckBox checked={checked} onCheck={handleCheck} />
    </div>
  );
}

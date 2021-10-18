import styles from "./CheckBox.module.css";
import { MdDone } from "react-icons/md";

export default function CheckBox(props) {
  const { checked, onCheck } = props;

  return (
    <button
      className={`${styles.checkbox} ${
        checked ? styles.check : styles.not_check
      }`}
      onClick={onCheck}
    >
      {checked && <MdDone />}
    </button>
  );
}

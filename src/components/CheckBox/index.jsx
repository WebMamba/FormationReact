import { useState } from "react";
import styles from "./CheckBox.module.css";

export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <button
      className={`${styles.checkbox} ${
        checked ? styles.check : styles.not_check
      }`}
      onClick={handleClick}
    />
  );
}

import { useState } from "react";
import TextField from "../TextField";
import styles from "./TodoForm.module.css";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);
  const [helperMessage, setHelperMessage] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;

    validateValue(newValue);

    setValue(newValue);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTouched(true);
  };

  const validateValue = (value) => {
    if (value === "") {
      setError(true);
      setHelperMessage("Vous devez écrire quelque chose");
      return;
    }

    if (value.length < 2) {
      setError(true);
      setHelperMessage("C'est un peu court");
      return;
    }

    if (value.length > 50) {
      setError(true);
      setHelperMessage("C'est beaucoup trop long");
      return;
    }

    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <TextField
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          error={error && touched}
          helperMessage={helperMessage}
        />
        <button className={styles.button} type="submit">
          Valider
        </button>
      </div>
    </form>
  );
}

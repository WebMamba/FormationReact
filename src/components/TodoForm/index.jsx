import PropTypes from "prop-types";
import { useState } from "react";
import { createNewTodoItem } from "../../services/todoManager";
import { validateName } from "../../services/validator";
import TextField from "../TextField";
import styles from "./TodoForm.module.css";

export default function TodoForm(props) {
  const { onAddItem } = props;
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

    validateValue(value);
    setTouched(true);

    if (error) {
      return;
    }

    const newItem = createNewTodoItem(value);

    if (onAddItem) {
      onAddItem(newItem);
    }
    setTouched(false);
    setValue("");
  };

  const validateValue = (value) => {
    const validationMessage = validateName(value);

    if (!validationMessage) {
      setError(false);
      return;
    }

    setError(true);
    setHelperMessage(validationMessage);
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
          Ajouter
        </button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  onAddItem: PropTypes.func,
};

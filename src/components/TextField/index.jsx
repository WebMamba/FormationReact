import PropTypes from "prop-types";
import styles from "./TextField.module.css";

export default function TextField(props) {
  const { value, onChange, error, helperMessage } = props;

  return (
    <div>
      <input
        className={`${styles.textbox} ${error ? styles.error : ""}`}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Aujourd'hui je fais..."
      />
      <p className={styles.error_message}>{error ? helperMessage : ""}</p>
    </div>
  );
}

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperMessage: PropTypes.string,
};

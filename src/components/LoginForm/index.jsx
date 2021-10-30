import { useState } from "react";
import TextField from "../TextField";
import styles from "./LoginForm.module.css";
import PropTypes from "prop-types";

export default function LoginForm(props) {
  const { onLogin } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onLogin({ email, password });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className={styles.button}>Connexion</button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func,
};

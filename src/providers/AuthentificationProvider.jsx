import { useState, useEffect } from "react";
import { AuthentificationContext } from "../contexts/AuthentificationContext";

export default function AuthentificationProvider(props) {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleNewToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <AuthentificationContext.Provider value={{ token, handleNewToken }}>
      {props.children}
    </AuthentificationContext.Provider>
  );
}

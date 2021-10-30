import { createContext } from "react";

export const AuthentificationContext = createContext({
  token: "",
  handleNewToken: () => {},
});

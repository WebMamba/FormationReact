import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../api/security";
import CenteredContainer from "../../components/CenteredContainer";
import Layout from "../../components/Layout";
import LoginForm from "../../components/LoginForm";
import { AuthentificationContext } from "../../contexts/AuthentificationContext";

export default function LoginPages() {
  const authentification = useContext(AuthentificationContext);
  const history = useHistory();

  const handleLogin = ({ email, password }) => {
    login(email, password).then((response) => {
      authentification.handleNewToken(response.token);
      history.push("/");
    });
  };

  useEffect(() => {
    if (authentification.token !== "") {
      history.push("/");
    }
  });

  return (
    <Layout>
      <CenteredContainer>
        <LoginForm onLogin={handleLogin} />
      </CenteredContainer>
    </Layout>
  );
}

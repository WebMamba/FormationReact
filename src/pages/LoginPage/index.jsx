import CenteredContainer from "../../components/CenteredContainer";
import Layout from "../../components/Layout";
import LoginForm from "../../components/LoginForm";

export default function LoginPages() {
  const handleLogin = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Layout>
      <CenteredContainer>
        <LoginForm onLogin={handleLogin} />
      </CenteredContainer>
    </Layout>
  );
}

import CenteredContainer from "../../components/CenteredContainer";
import LoginForm from "../../components/LoginForm";

export default function LoginPages() {
  const handleLogin = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <CenteredContainer>
      <LoginForm onLogin={handleLogin} />
    </CenteredContainer>
  );
}

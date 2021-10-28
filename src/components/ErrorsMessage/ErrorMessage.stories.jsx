import ErrorMessage from ".";

export default {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
};

export const Normal = () => (
  <ErrorMessage open={true} message="Oups ! Une erreur est survenue" />
);

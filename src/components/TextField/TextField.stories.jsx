import TextField from ".";

export default {
  title: "Components/TextField",
  component: TextField,
};

export const Normal = () => <TextField />;

export const Error = () => (
  <TextField error={true} helperMessage="Vous devez écrire un truc" />
);

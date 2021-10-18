import CheckBox from ".";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
};

export const NotChecked = () => <CheckBox checked={false} />;

export const Checked = () => <CheckBox checked={true} />;

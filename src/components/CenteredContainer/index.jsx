import styles from "./CenteredContainer.module.css";

export default function CenteredContainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}

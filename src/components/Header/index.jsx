import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>TODO</h3>
      <span />
      <div className={styles.avatar}>
        <p>T</p>
      </div>
    </div>
  );
}

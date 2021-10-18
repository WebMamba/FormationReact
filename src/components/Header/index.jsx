import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <span />
      <h3 className={styles.title}>TODO</h3>
      <div className={styles.avatar}>
        <p>T</p>
      </div>
    </header>
  );
}

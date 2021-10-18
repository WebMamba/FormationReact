import styles from "./TodoItem.module.css";

export default function TodoItem() {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Faire une appli react</h5>
      <p className={styles.caption}>Ajouté le 12/17/20 à 14h</p>
    </div>
  );
}

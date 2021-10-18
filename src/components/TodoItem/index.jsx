import styles from "./TodoItem.module.css";

export default function TodoItem(props) {
  const { title, datetime } = props;

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.caption}>
        Ajouté le {datetime.getDay()}/{datetime.getMonth()} à{" "}
        {datetime.getHours()}h
      </p>
    </div>
  );
}

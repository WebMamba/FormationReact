import { useState, useEffect } from "react";
import styles from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanUp() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h4 className={styles.time}>{time.toLocaleTimeString().slice(0, 5)}</h4>
    </div>
  );
}

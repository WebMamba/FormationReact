import styles from "./HelloWorld.module.css";

export default function HelloWorld() {
    const name = "Arthur";

    return (
        <>
            <h1 className={styles.title}>Bienvenu sur React { name } !</h1>
        </>
    );
}
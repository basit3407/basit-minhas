import styles from "../styles/Home.module.css";

export default function Top() {
  return (
    <div className={styles.topContainer}>
      <img className={styles.topCloud} src="images/cloud.png" alt="cloud" />
      <h1>I am Basit</h1>
      <h2 className={styles.subtitle}>a Programmer</h2>

      <img className={styles.bottomCloud} src="images/cloud.png" alt="cloud" />
      <img src="images/mountain.png" alt="mountain" />
    </div>
  );
}

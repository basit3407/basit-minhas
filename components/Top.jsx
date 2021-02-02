import styles from "../styles/Home.module.css";

export default function Top() {
  return (
    <div className={styles.TopContainer}>
      <img className="top_cloud" src="images/cloud.png" alt="cloud" />
      <h1>I am Basit</h1>
      <h2 className="subtitle">a Programmer</h2>

      <img className="bottom_cloud" src="images/cloud.png" alt="cloud" />
      <img src="images/mountain.png" alt="mountain" />
    </div>
  );
}

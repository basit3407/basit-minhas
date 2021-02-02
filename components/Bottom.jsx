import styles from "../styles/Home.module.css";

export default function Bottom() {
  const date = new Date().getFullYear();
  return (
    <div className={styles.bottomContainer}>
      <a href="https://www.linkedin.com/in/basit-m-0a483062/">LinkedIn</a>
      <a href="https://www.facebook.com/basit.minhas.7/">facebook</a>

      <p className={styles.pFooter}>© {date} Basit Minhas.</p>
    </div>
  );
}

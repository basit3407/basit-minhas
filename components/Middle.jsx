import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Middle() {
  return (
    <div className={styles.middleContainer}>
      <div>
        <img src="images/Basit.png" alt="image" />
        <h2>Hello.</h2>
        <p className={styles.intro}>
          I am a programmer and Engineer. I love reading and coding.
        </p>
      </div>
      <hr />
      <div>
        <h2>My Skills.</h2>
        <div className={styles.skillRow}>
          <img
            className={styles.computerImg}
            src="images/computer.png"
            alt=""
          />
          <h3>Designing & Coding</h3>
          <p>
            I Love to code, I design web applications as well as static
            websites. i am full stack developer.
          </p>
        </div>
        <div className={styles.skillRow}>
          <img className={styles.mernImg} src="images/MERN.jpg" alt="" />
          <h3>MERN Apps</h3>
          <p>
            My core area of expertise are MERN(Mongodb,Express,ReactJs,NodeJs)
            applications.
          </p>
        </div>
        <div className={styles.skillRow}>
          <img
            src="images/Engineer.png"
            alt="image"
            className={styles.engineerImg}
          />
          <h3>Engineering</h3>
          <p>
            I am Qualified Engineer. I Graduated from{" "}
            <a href="http://www.nust.edu.pk">NUST</a> in 2012
          </p>
        </div>
      </div>
      <hr />
      <div>
        <h2>Get In Touch</h2>
        <h3>So how may i help you?</h3>
        <p>click on contact me and send me your message.</p>
        <a className={styles.btn} href="mailto:basit3407@gmail.com">
          CONTACT ME
        </a>
      </div>
      <FontAwesomeIcon color="green" icon={faWhatsapp} />
      <span>+923002631368</span>
    </div>
  );
}

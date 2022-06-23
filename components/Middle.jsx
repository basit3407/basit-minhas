import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  Grid,
  makeStyles,
  Container,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      margin: "100px 0",
    },
    skills: {
      textAlign: "center",
    },
    Image: {
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "50%",
      },
    },
    skillsImage: {
      [theme.breakpoints.down("sm")]: {
        width: "50%",
      },
    },

    skillsTypo: {
      width: "100%",
      textAlign: "center",
      margin: "0 auto",
      padding: "1%",
      [theme.breakpoints.up("md")]: {
        width: "75%",
        textAlign: "left",
      },
    },
  }),
  { index: 1 }
);

export default function Middle() {
  const theme = useTheme(),
    matches = useMediaQuery(theme.breakpoints.up("md")),
    classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Container>
        <Grid item xs={12}>
          <img src="images/Basit.png" alt="image" />
          <h2>Hello.</h2>
          <p className={styles.intro}>
            I am a programmer and Engineer. I love reading and coding.
          </p>
        </Grid>

        <hr />

        <Grid
          className={classes.skills}
          item
          container
          alignItems="center"
          xs={12}
          spacing={5}
        >
          <Grid item xs={12}>
            <h2>What i do.</h2>
          </Grid>

          <Grid item xs={12} md={6}>
            <h3 className={classes.skillsTypo}>
              Develop Mobile Apps & Web Apps
            </h3>
            <p className={classes.skillsTypo}>
              I develop web applications, mobile applications &#40;android and
              ios&#41; and static websites. i am full stack developer.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className={classes.Image} src="images/computer.png" alt="" />
          </Grid>

          <Grid style={{ display: !matches && "none" }} item xs={12} md={6}>
            <img
              className={classes.skillsImage}
              src="images/skills.png"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className={classes.skillsTypo}>Skills</h3>
            <p className={classes.skillsTypo}>
              Frontend: React, React-Native, Typescript
            </p>
            <p className={classes.skillsTypo}>
              Backend:Python ,Django-Rest-Framework, Nodejs, Express, Mongodb
            </p>
          </Grid>
          <Grid style={{ display: matches && "none" }} item xs={12} md={6}>
            <img
              className={classes.skillsImage}
              src="images/skills.png"
              alt=""
            />
          </Grid>

          <Grid xs={12} md={6}>
            <h3 className={classes.skillsTypo}>Education</h3>
            <p className={classes.skillsTypo}>
              I am Qualified Engineer. I Graduated from{" "}
              <a href="http://www.nust.edu.pk">NUST</a> in 2012
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="images/Engineer.png"
              alt="image"
              className={classes.Image}
            />
          </Grid>
        </Grid>
        <hr />
        <div>
          <h2>My Works</h2>
          <Grid container>
            <Grid item xs={12} md={4}>
              <a href="https://play.google.com/store/apps/details?id=com.bm.islamicpraytracker">
                Islamic-Pray-Tracker (Android)
              </a>
            </Grid>
            <Grid item xs={12} md={4}>
              <a href="https://play.google.com/store/apps/details?id=com.basit3407.Dhikr_App">
                Light Dhikr (Android)
              </a>
            </Grid>
            <Grid item xs={12} md={4}>
              <a href="https://saqee-onlinestore.vercel.app">
                Saqee Online Store (Web)
              </a>
            </Grid>
            <Grid item xs={12} md={4}>
              <a href="https://prevail-engineering.vercel.app/">
                Prevail Engineering (Web)
              </a>
            </Grid>
          </Grid>
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
        <FontAwesomeIcon
          className={styles.icon}
          color="green"
          icon={faWhatsapp}
        />
        <span>+923002631368</span>
      </Container>
    </Grid>
  );
}

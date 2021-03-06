import { Grid, makeStyles } from "@material-ui/core";
import styles from "../styles/Home.module.css";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: "#eaf6f6",
      paddingTop: "5%",
    },
    topCloud: {
      position: "relative",
      left: "25%",
      [theme.breakpoints.down("sm")]: {
        width: "25%",
        top: "5%",
      },
    },
    bottomCloud: {
      position: "relative",
      bottom: "33%",
      [theme.breakpoints.down("sm")]: {
        width: "25%",
        bottom: "15%",
      },
    },

    mountain: {
      width: "50%",
      marginRight: "15%",
    },
  }),
  { index: 1 }
);

export default function Top() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <img className={classes.topCloud} src="images/cloud.png" alt="cloud" />
        <h1>I am Basit</h1>
        <h2 className={styles.subtitle}>a Programmer</h2>

        <img
          className={classes.bottomCloud}
          src="images/cloud.png"
          alt="cloud"
        />
        <img
          className={classes.mountain}
          src="images/mountain.png"
          alt="mountain"
        />
      </Grid>
    </Grid>
  );
}

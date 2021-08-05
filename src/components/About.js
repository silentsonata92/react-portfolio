import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  heading: {
    color: "white",
    padding: "2rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h1" align="center" className={classes.heading}>
        About Me
      </Typography>
      <Typography variant="h6" align="center" className={classes.heading}>
        My name is Sle (Joon) Ahn. I am a 29 year-old Korean-American studying full stack development from UCI Coding Bootcamp. Previously, I worked as a headserver and assistant manager at multiple restaurants for 6 years.
        <Typography variant="h6" align="center" className={classes.heading}>
          Passions
        </Typography>
        From learning history and politics to cooking and fishing, I love to learn and apply. Nothing is better than when you've
        achieved success from knowledge.
        <Typography variant="h6" align="center" className={classes.heading}>
          Moving Forward
        </Typography>
        It is my ambition and hope that after having graduated from UCI Coding Bootcamp that I will be given an opportunity to be hired at a competitive company.
      </Typography>
    </Box>
  );
};

export default About;

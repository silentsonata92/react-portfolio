import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


import project1 from "../images/Project1.png";
import project2 from "../images/INKEDIN.png";
import project3 from "../images/zap.png";

const useStyles = makeStyles((theme) => ({
 
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Project 1: SongSlang",
    description: `SongSlang is an app that allows a user to search any of his/her favorite songs' lyrics, and then search both the Urban Dictionary and Merriam Webster definitions of any words in those songs.`,
    image: project1,
    github: 'https://github.com/silentsonata92/project1',
    demo: 'https://silentsonata92.github.io/project1/'
  },
  {
    name: "Project 2: InkedIn",
    description: `InkedIn is a marketplace specifically for tattoo designs. InkedIn was conceived when we saw tattoo artists posting their designs on social media, and we wondered whether there might be a better place for them to do business.`,
    image: project2,
    github: 'https://github.com/silentsonata92/Project2Tattoo',
    demo: 'https://agile-everglades-33019.herokuapp.com/login'
  },
  {
    name: "Project 3: Zap",
    description: `Zap is an app created to combine the project management and bug tracking aspects of app development. You can ask for help both within your group or ask the community. Our goal is to streamline the process of app development by giving you one place to manage projects and ask any and all questions related to development.`,
    image: project3,
    github: 'https://github.com/silentsonata92/project3',
    demo: 'https://zapbugtracker.herokuapp.com/login'
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.github} target="_blank">
                  Github
                </Button>
                <Button size="small" color="primary" href={project.demo} target="_blank">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;

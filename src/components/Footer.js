import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "tan",

      },
    },
    padding: 'none'
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
 <React.Fragment>
    <BottomNavigation className={classes.bottomNavContainer}>
        <BottomNavigationAction icon={<Facebook />} className={classes.root} href="https://www.facebook.com/joon.ahn.18" target="_blank"/>
        <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} href="https://www.linkedin.com/in/sle-ahn" target="_blank"/>
        <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} href="https://github.com/silentsonata92?tab=repositories" target='_blank'/>
    </BottomNavigation>

    <BottomNavigation className={classes.bottomNavContainer}>
        <BottomNavigationAction icon={<MailIcon />} className={classes.root} href="mailto:junejoon92@gmail.com" target="_blank"/>
        <BottomNavigationAction icon={<InsertDriveFileIcon />} className={classes.root} href="https://docs.google.com/document/d/15E6mt-Z_frUeu2MNEO-xWfI7hp4LSyK9lYncYi5ALls/edit?usp=sharing" target="_blank" />
    </BottomNavigation>
    </React.Fragment>
 
  );
};
export default Footer;

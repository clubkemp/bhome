import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { red, green, blue, yellow, purple, teal  } from '@material-ui/core/colors';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import HealingIcon from '@material-ui/icons/Healing';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
  root: {
    width: "80%",
    maxWidth: 500,
  },
  red: {
    color: red[500],
  },
  green: {
    color: green[500],
  },
  purple: {
    color: purple[500],
  },
  teal: {
    color: teal[500],
  },
  yellow: {
    color: yellow[800],
  },
  blue: {
    color: blue[500],
  },
});






export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        Welcome friend
      </Typography>
      <Typography variant="body1" gutterBottom>
        We all need a little help from time to time, it's a fact of life. Sometimes it is easy to find that help, sometimes it isn't. We hope to streamline getting you the help you
        need quickly by providing a working list of all the know resources availabile for those in need.
      </Typography>
      <Typography variant="body1" gutterBottom>
      Use the buttons above to toggle on/off the services you are interestd in finding. Toggle between the list view and map view in the top left navbar   
      </Typography>
      <Typography variant="h6" gutterBottom>
        Filter categories:  
      </Typography>
      <Typography className={classes.red}variant="body1"  gutterBottom>
        <HomeWorkIcon /> Housing 
      </Typography>
      <Typography className={classes.green}variant="body1"  gutterBottom>
        <HealingIcon /> Substance Use
      </Typography>
      <Typography className={classes.purple}variant="body1"  gutterBottom>
        <RestaurantIcon /> Food Needs
      </Typography>
      <Typography className={classes.teal}variant="body1"  gutterBottom>
        <EmojiEmotionsIcon /> Mental Health
      </Typography>
      <Typography className={classes.yellow}variant="body1"  gutterBottom>
        < DoneAllIcon /> Multiple Services
      </Typography>
      <Typography className={classes.blue}variant="body1"  gutterBottom>
        <MoreVertIcon /> Other Services
      </Typography>
      
    </div>
  );
}
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
  key:{
      marginTop:"30px"
  }
});






export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid container  justify="center"item xs={12}>
            <Typography variant="h2" gutterBottom align="center">
                Welcome
            </Typography>
        </Grid>
        <Grid container item  xs={12} >
            <Grid item sm={12}>
                <Typography variant="body1" gutterBottom >
                    We all need a little help from time to time, it's a fact of life. Sometimes it is easy to find that help, sometimes it isn't. We hope to streamline getting you the help you
                    need quickly by providing a working list of all the know resources availabile for those in need.
                </Typography>
                <Typography variant="body1" gutterBottom >
                    Use the buttons above to toggle on/off the services you are interestd in finding. Toggle between the list view and map view in the top left navbar   
                </Typography>
            </Grid>
            <Grid className={classes.key}container item sm={12} spacing={2} justify="center">
                <Grid item className={classes.red} >
                    <HomeWorkIcon /> Housing 
                </Grid>
                <Grid item className={classes.green} >
                    <HealingIcon /> Substance Use
                </Grid>
                <Grid item className={classes.purple} >
                    <RestaurantIcon /> Food Needs
                </Grid >
                <Grid item className={classes.teal} >
                    <EmojiEmotionsIcon /> Mental Health
                </Grid>
                <Grid item className={classes.yellow} >
                    < DoneAllIcon /> Multi Services
                </Grid>
                <Grid item className={classes.blue} >
                    <MoreVertIcon /> Other Services
                </Grid>
            </Grid>  
      </Grid>
        </Grid>
    </div>
  );
}
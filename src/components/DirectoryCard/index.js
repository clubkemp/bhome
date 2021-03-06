import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green, blue, yellow, purple, teal  } from '@material-ui/core/colors';

import Grid from '@material-ui/core/Grid';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MapIcon from '@material-ui/icons/Map';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import HealingIcon from '@material-ui/icons/Healing';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import Details from '../Details'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  divider:{
    margin: "25px 0px"
  }
}));
// takes in the item of data being mapped over as data
export default function DirectoryCard({ data, handleZoomTo }) {
  const classes = useStyles();
  // sets up the state for if a cards info is expanded 
  const [expanded, setExpanded] = useState(false);
  // toggles the expansion on click
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // setup the var for the color of background
  const color = {backgroundColor:green[0]}
  const banner = {height:"75px"}
  // toggles the avatar to match the category
  const avatarGen = (category) =>{
    if(category === 'Housing'){
      color.backgroundColor = red[500]
      banner.backgroundColor = red[500]
      return <HomeWorkIcon  />
    }else if(category === 'Substance use'){
      color.backgroundColor = green[500]
      banner.backgroundColor = green[500]
      return <HealingIcon />
    }else if (category === 'Food'){
      color.backgroundColor = purple[500]
      banner.backgroundColor = purple[500]
      return <RestaurantIcon />
    }else if (category ==='Mental Health'){
      color.backgroundColor = teal[500]
      banner.backgroundColor = teal[500]
      return <EmojiEmotionsIcon />
    }else if (category === 'Multi'){
      color.backgroundColor = yellow[800]
      banner.backgroundColor = yellow[800]
      return <DoneAllIcon />
    }else{
      color.backgroundColor = blue[500]
      banner.backgroundColor = blue[500]
      return <MoreVertIcon />
    }
  }
  
  // const avatarColor = (category) =>{
  //   if(category === 'Housing'){
  //     return { backgroundColor: green[500] }
  //   }else if(category === 'Substance use'){
  //     return { backgroundColor: red[500] }
  //   }else if (category === 'Food'){
  //     return 
  //   }else if (category ==='Mental Health'){
  //     return 
  //   }else if (category === 'Multi'){
  //     return 
  //   }else{
  //     return 
  //   }
  // }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={color}>
            {avatarGen(data.Category)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={e=>handleZoomTo(data.lat, data.long)}>
            <MapIcon/>
          </IconButton>
        }
        title={data.program}
        subheader={data.organization}
      />
      <Grid container >
        <Grid item container xs={12} alignItems="center" justify="center" style={banner} >
            <Typography variant="h5" style={{ color: "white" }}>
              {data.Category}
            </Typography>
        </Grid>
      </Grid>
      {/* <CardMedia
        className={classes.media}
        image="http://placekitten.com/g/200/300"
        title="Org image"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.blurb.length <= 100 ? data.blurb :`${data.blurb.substring(0,100)}...`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.blurb.length <= 100 ? null :`...${data.blurb.substring(100,data.blurb.length)}`}
          </Typography>
          <Divider variant="middle" className={classes.divider} />
          <Details data={data} />
          
        </CardContent>
      </Collapse>
    </Card>
  );
}

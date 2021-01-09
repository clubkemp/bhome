import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import LabelIcon from '@material-ui/icons/Label';
import PeopleIcon from '@material-ui/icons/People';

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
  // avatar: {
  //   backgroundColor: red[500],
  // },
}));
// takes in the item of data being mapped over as data
export default function DirectoryCard({ data }) {
  const classes = useStyles();
  // sets up the state for if a cards info is expanded 
  const [expanded, setExpanded] = useState(false);
  // toggles the expansion on click
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // setup the var for the color of background
  const avatarColor = {backgroundColor:green[0]}
  
  // toggles the avatar to match the category
  const avatarGen = (category) =>{
    if(category === 'Housing'){
      avatarColor.backgroundColor = red[500]
      return <HomeWorkIcon  />
    }else if(category === 'Substance use'){
      avatarColor.backgroundColor = green[500]
      return <HealingIcon />
    }else if (category === 'Food'){
      avatarColor.backgroundColor = purple[500]
      return <RestaurantIcon />
    }else if (category ==='Mental Health'){
      avatarColor.backgroundColor = teal[500]
      return <EmojiEmotionsIcon />
    }else if (category === 'Multi'){
      avatarColor.backgroundColor = yellow[800]
      return <DoneAllIcon />
    }else{
      avatarColor.backgroundColor = blue[500]
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
          <Avatar aria-label="recipe" style={avatarColor}>
            {avatarGen(data.Category)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MapIcon/>
          </IconButton>
        }
        title={data.program}
        subheader={data.organization}
      />
      <CardMedia
        className={classes.media}
        image="http://placekitten.com/g/200/300"
        title="Org image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          All the little tidbits on the organization. What they offer, who they target, mission statement, whatever. Short and sweet and getting people clickable
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
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <AccessTimeIcon />
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textPrimary" component="p">
                {data.hours}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <PlaceIcon />
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textPrimary" component="p">
                {data.address}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <PhoneIcon /> 
            </Grid>
            <Grid item>
            <Typography variant="body2" color="textPrimary" component="p">
              {data.phone}
            </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <LanguageIcon />
            </Grid>
            <Grid item>
            <Typography variant="body2" color="textPrimary" component="p">
              <a href={`${data.web}`} target="_blank">{data.program} Website</a>
            </Typography> 
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <LabelIcon /> 
            </Grid>
            <Grid item>
            <Typography variant="body2" color="textPrimary" component="p">
              {data.services}
            </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <PeopleIcon /> 
            </Grid>
            <Grid item>
            <Typography variant="body2" color="textPrimary" component="p">
              {data.target}
            </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}

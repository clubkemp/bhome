import React from 'react';
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
import { red } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MapIcon from '@material-ui/icons/Map';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import HealingIcon from '@material-ui/icons/Healing';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DoneAllIcon from '@material-ui/icons/DoneAll';

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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function DirectoryCard({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const avatarGen = (category) =>{
    if(category === 'Housing'){
      return <HomeWorkIcon />
    }else if(category === 'Substance use'){
      return <HealingIcon />
    }else if (category === 'Food'){
      return <RestaurantIcon />
    }else if (category ==='Mental Health'){
      return <EmojiEmotionsIcon />
    }else if (category === 'Multi'){
      return <DoneAllIcon />
    }else{
      return 'O'
    }
    //     Housing
// Substance use
// Food
// Mental Health
// Multi
// Other
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
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
          <p>hours:</p>
          <p>{data.hours}</p>
          <p>Address:{data.address}</p>
          <p>Phone: {data.phone}</p>
          <p>Website:<a href={`${data.web}`} target="_blank">{data.web}</a></p>
          <p>Services: {data.services}</p>
          <p>Target: {data.target}</p>
        </CardContent>
      </Collapse>
    </Card>
  );
}

import React from 'react'
import Grid from '@material-ui/core/Grid';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import LabelIcon from '@material-ui/icons/Label';
import PeopleIcon from '@material-ui/icons/People';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  address: {
    color: "red",
  },
  
}));

export default function Details({ data }) {

  const handleBlank = (data) =>{
    if(data){
      return data
    }else{
      return 'Coming soon...'
    }
  }
    return (
        <div>
            <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <AccessTimeIcon />
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textPrimary" component="p">
                {handleBlank(data.hours)}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <PlaceIcon />
            </Grid>
            <Grid item>
              <Typography className={}variant="body2" color="textPrimary" component="p">
                {handleBlank(data.Zip)}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <PhoneIcon /> 
            </Grid>
            <Grid item>
            <Typography variant="body2" color="textPrimary" component="p">
              {handleBlank(data.phone)}
            </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <LanguageIcon />
            </Grid>
            <Grid item>
            <Typography variant="body2" color="textPrimary" component="p">
              {data.web ? <a href={`${data.web}`} target="_blank">{data.program} Website</a> : "Coming soon..."}
            </Typography> 
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <LabelIcon /> 
            </Grid>
            <Grid item>
            <Typography variant="body2" color="textPrimary" component="p">
              {handleBlank(data.services)}
            </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <PeopleIcon /> 
            </Grid>
            <Grid item>
            <Typography variant="body2" color="textPrimary" component="p">
              {handleBlank(data.target)}
            </Typography>
            </Grid>
          </Grid>
        </div>
    )
}

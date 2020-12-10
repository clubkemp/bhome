import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import MapIcon from '@material-ui/icons/Map';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minWidth:200,
    maxWidth: 200,
  },
  tab:{
    minWidth: 5,
    width: 50
  }
});

export default function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    props.handleView(newValue)
    setValue(newValue);
  };

  return (
      <Tabs
        value={value}
        className={classes.root}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab className={classes.tab} icon={<ListAltIcon />} label="LIST" />
        <Tab className={classes.tab} icon={<MapIcon />} label="MAP" />
      </Tabs>
  );
}

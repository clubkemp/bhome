import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SearchIcon from '@material-ui/icons/Search';
import MapIcon from '@material-ui/icons/Map';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const [view, setView] = useState('directory');

  const handleView = (event, newView) => {
    setView(newView);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <ToggleButtonGroup
        value={view}
        exclusive   
        onChange={handleView}
        aria-label="component view"
        >
            <ToggleButton value="directory" aria-label="directory button" className={classes.menuButton} color="inherit">
                <ListAltIcon />
            </ToggleButton>
            <ToggleButton value="map" aria-label="map button" className={classes.menuButton} color="inherit">
                <MapIcon />
            </ToggleButton>
        </ToggleButtonGroup>
          <Typography className={classes.title} variant="h6" noWrap>
            Bhome - Resources for those looking for help
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={props.value}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e=>props.handleSearch(e)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
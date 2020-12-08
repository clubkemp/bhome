import './App.css';
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system'
import Data from './utils/Data'
import SearchAppBar from './components/AppBar'
import Directory from './components/Directory'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [data, setData] = useState(Data)
  const classes = useStyles();
  console.log(data)
  return (
    <div>
    <SearchAppBar />
    <Grid container className={classes.root}>
      <Directory data={data} />
      <Grid container spacing={2} item sm={12} md={6}>
        
      </Grid>
    </Grid>
    </div>
  );
}

export default App;

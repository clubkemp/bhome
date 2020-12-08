import './App.css';
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system'
import Data from './utils/Data'
import SearchAppBar from './components/AppBar'
import Directory from './components/Directory'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


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
    <Grid container className={classes.root} >
      <Box mt={10}>
        <Directory data={data} />
      </Box>
    </Grid>
    </div>
  );
}

export default App;

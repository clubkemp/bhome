import './App.css';
import {useState} from 'react'


import Data from './utils/Data'
import SearchAppBar from './components/AppBar'
import Directory from './components/Directory'
import FilterBtns from './components/FilterBtns'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system'


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
  const [filter, setFilter] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [search, setSearch] = useState('')
  const classes = useStyles();

  const handleFilters = (filters) =>{
    setFilter(filters)
  }
  const handleSearch = (event) => {
      setSearch(event.target.value)
      const filtered = data.filter(item=>{
        return item.program.toLowerCase().includes(search.toLowerCase())
      })
      setFilteredData(filtered)
    
  }
  return (
    <div>
    <SearchAppBar value={search} handleSearch={handleSearch}/>
    <Grid container className={classes.root} >
      <Box mt={10}>
        <FilterBtns handleFilters={handleFilters}/>
        <Directory data={(search.length > 0 ? filteredData : data)} />
      </Box>
    </Grid>
    </div>
  );
}

export default App;

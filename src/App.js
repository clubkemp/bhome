import './App.css';
import {useState, useEffect} from 'react'


import Data from './utils/Data'
import SearchAppBar from './components/AppBar'
import Directory from './components/Directory'
import FilterBtns from './components/FilterBtns'
import MapComp from './components/MapComp'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [data, setData] = useState(Data)
  const [view, setView] = useState("list")
  
  const [filter, setFilter] = useState(['Housing', 'Substance use','Food', 'Mental Health', 'Multi', 'Other'])
  const [filteredData, setFilteredData] = useState([])
  
  const [search, setSearch] = useState('')
  const [searchedData, setSearchedData] = useState([])
  
  const classes = useStyles();

  useEffect(()=>{
    const filtered = data.filter(item =>{
      return filter.includes(item.Category)
    })
    console.log(filtered)
    setFilteredData(filtered)
  },[filter])

  const handleFilters = (filters) =>{
    setFilter(filters)
      console.log(filters)
      
  }
  const handleSearch = (event) => {
      setSearch(event.target.value)
      const searched = filteredData.filter(item=>{
        return item.program.toLowerCase().includes(search.toLowerCase())
      })
      setSearchedData(searched)
    
  }
  const handleView = (viewToggle) =>{
    if(viewToggle === 0){
      setView("list")
    }else if(viewToggle === 1){
      setView("map")
    }
    console.log(view)
  }
  return (
    <div>
    <SearchAppBar value={search} handleSearch={handleSearch} handleView={handleView}/>
    <Grid container justify="center" spacing={3}>
      <Box mt={10}>
        <FilterBtns handleFilters={handleFilters} mx="auto"/>
      </Box>
        {(view==="list" ? <Directory data={(search.length > 0 ? searchedData : filteredData)} /> : <MapComp />)}
    </Grid>
    </div>
  );
}

export default App;

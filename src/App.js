import './App.css';
import {useState, useEffect} from 'react'


import Data from './utils/Data'
import SearchAppBar from './components/AppBar'
import Directory from './components/Directory'
import FilterBtns from './components/FilterBtns'
import MapComp from './components/MapComp'

import Typography from '@material-ui/core/Typography';
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
  // set the data as the data imported above form data.json
  const [data, setData] = useState(Data)
  // used to control if the user sees the list or the map
  const [view, setView] = useState("list")
  // used to filter the data based on the cateogy
  const [filter, setFilter] = useState(['Housing', 'Substance use','Food', 'Mental Health', 'Multi', 'Other'])
  // stores the filtered data as a new array keep the original data intact
  const [filteredData, setFilteredData] = useState([])
  
  // search term to match with the filtered data
  const [search, setSearch] = useState('')
  //result of the filtered search
  const [searchedData, setSearchedData] = useState([])
  
  // the styles defined above
  const classes = useStyles();

  // on render, or DOM update...
  useEffect(()=>{
    // creat a filtered variable to hold filtered data and use filter method to fill it based on filter state
    const filtered = data.filter(item =>{
      return filter.includes(item.Category)
    })
    // set the filteredData based on the filter state
    setFilteredData(filtered)
    // only rerun the effect if filter is changed
  },[filter])
  // handle the filter change
  const handleFilters = (filters) =>{
    // set to array of filter params
    setFilter(filters)
      
  }
  // handle the search event
  const handleSearch = (event) => {
    // handles the event target change for searchbar
    setSearch(event.target.value)
    // set the search var equal to a data filter on filteredData
    const searched = filteredData.filter(item=>{
      return item.program.toLowerCase().includes(search.toLowerCase())
    })
    // setup the search data state change
    setSearchedData(searched)
    
  }
  // hanldes the view change when a user toggles between list and map
  const handleView = (viewToggle) =>{
    if(viewToggle === 0){
      setView("list")
    }else if(viewToggle === 1){
      setView("map")
    }
  }
  return (
    <div>
    <SearchAppBar value={search} handleSearch={handleSearch} handleView={handleView}/>
    <Grid container justify="center" spacing={3}>
      <Box mt={10}>
        <FilterBtns filter={filter} handleFilters={handleFilters} mx="auto"/>
      </Box>
        {(view==="list" ? <Directory data={(search.length > 0 ? searchedData : filteredData)} /> : <MapComp data={(search.length > 0 ? searchedData : filteredData)}/>)}
    </Grid>
   
    </div>
  );
}

export default App;

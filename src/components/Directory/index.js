import React from 'react'
import DirectoryCard from '../DirectoryCard'
import Grid from '@material-ui/core/Grid';

// takes in data
export default function Directory(props) {
    return (
        // returns a grid containing a map of the data
        <Grid container item spacing={3} justify="center">
             {props.data.map(e=>{
                return(
                <Grid item>
                    <DirectoryCard data={e}/>
                </Grid>
                 )
            })}
        </Grid>
        
    )
}

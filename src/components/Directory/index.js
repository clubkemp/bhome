import React from 'react'
import DirectoryCard from '../DirectoryCard'
import Grid from '@material-ui/core/Grid';


export default function Directory(props) {
    return (
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

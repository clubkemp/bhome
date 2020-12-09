import React from 'react'
import DirectoryCard from '../DirectoryCard'
import Grid from '@material-ui/core/Grid';


export default function Directory(props) {
    return (
        <Grid container justify="center" spacing={3} item sm={12}>
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

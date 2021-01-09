import React from 'react'
import "./style.css";
import Grid from '@material-ui/core/Grid';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Tooltip
  } from "react-leaflet";
import DirectoryCard from '../DirectoryCard'

import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import LabelIcon from '@material-ui/icons/Label';
import PeopleIcon from '@material-ui/icons/People';

export default function MapComp({ data }) {
    
    return (
        <Grid container item spacing={3} justify="center">
            <div id="mapWindow">
                <MapContainer center={[48.798044, -122.282295]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map((marker) => (
                    <Marker

                        // key={`marker-${marker.id}`}
                        // id={marker.id}
                        eventHandlers={{
                        click: (e)=>{
                            e.target.openPopup()
                        }
                        }}
                        position={{
                        lat: marker.lat,
                        lng: marker.long,
                        }}
                    >
                        <Tooltip>{marker.program}</Tooltip>
                        <Popup>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                <AccessTimeIcon />
                                </Grid>
                                <Grid item>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    {marker.hours}
                                </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                <PlaceIcon />
                                </Grid>
                                <Grid item>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    {marker.address}
                                </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                <PhoneIcon /> 
                                </Grid>
                                <Grid item>
                                <Typography variant="body2" color="textPrimary" component="p">
                                {marker.phone}
                                </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                <LanguageIcon />
                                </Grid>
                                <Grid item>
                                <Typography variant="body2" color="textPrimary" component="p">
                                <a href={`${marker.web}`} target="_blank">{marker.program} Website</a>
                                </Typography> 
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                <LabelIcon /> 
                                </Grid>
                                <Grid item>
                                <Typography variant="body2" color="textPrimary" component="p">
                                {marker.services}
                                </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                <PeopleIcon /> 
                                </Grid>
                                <Grid item>
                                <Typography variant="body2" color="textPrimary" component="p">
                                {marker.target}
                                </Typography>
                                </Grid>
                            </Grid>
                        {/* <HandlePointClick id={marker.id} /> */}
                        {/* <div className="popupPlace">{marker.program}</div> */}
                        {/* if edit state is actie give update and delte functionality */}
                        </Popup>
                    </Marker>
                    ))}
                </MapContainer>
            </div>
        </Grid>
    )
}

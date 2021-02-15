import React from 'react'
import "./style.css";
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Tooltip
  } from "react-leaflet";
import { divIcon } from "leaflet";
import Details from '../Details'

import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import LabelIcon from '@material-ui/icons/Label';
import PeopleIcon from '@material-ui/icons/People';

import { renderToStaticMarkup } from "react-dom/server";

import { red, green, blue, yellow, purple, teal  } from '@material-ui/core/colors';

export default function MapComp({ data, mapExtent }) {
    
    // function that takes in the data.category in each marker to determine the build of the icon
    const buildIcon = (category) => {
        // variable to fill with the category color
        let colorCat 
        // if category matches set the color
        if (category === "Housing") {
          colorCat = red[500];
        } else if (category === "Substance use") {
          colorCat = green[500];
        } else if (category === "Food") {
          colorCat = purple[500];
        } else if (category === "Mental Health") {
          colorCat = teal[500];
        } else if (category === "Multi") {
          colorCat = yellow[800];
        } else {
          colorCat = blue[500];
        }
        
        // render the static markup for the icon and span to inherit the color
        const iconMarkup = renderToStaticMarkup(
        <span style={{color: colorCat}} >
            <i className=" fa fa-map-marker-alt fa-3x" />
        </span>
        );
        // setup the divIcon that leaflet uses
        const customMarkerIcon = divIcon({
            html: iconMarkup,
            iconAnchor:   [30, 30],
            popupAnchor:  [-15, -30]
        });
        // return the marker so we can call this function in the marker component in our map
        return customMarkerIcon
    }
    
      
    
    return (
        <Grid container item spacing={3} justify="center">
            <div id="mapWindow">
                <MapContainer center={mapExtent.bounds} zoom={mapExtent.zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map((marker) => (
                    <Marker
                        icon = {buildIcon(marker.Category)}
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
                            <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
                                {marker.program}
                            </Typography>
                            <Details data={marker} />
                        </Popup>
                    </Marker>
                    ))}
                </MapContainer>
            </div>
        </Grid>
    )
}

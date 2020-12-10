import React from 'react'
import "./style.css";
import Grid from '@material-ui/core/Grid';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
  } from "react-leaflet";

export default function MapComp() {
    
    const position = [51.505, -0.09]
    return (
        <Grid container item spacing={3} justify="center">
            <div id="mapWindow">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>
            </div>
        </Grid>
    )
}

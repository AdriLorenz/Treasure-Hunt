import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
// Styles
import { Wrapper } from "./Test.styles";
import "../../node_modules/leaflet/dist/leaflet.css";
import "../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css";
// Images
import User from "../assets/icons/RSVamos_ProfilePageIcon.svg";

const iconPerson = new L.Icon({
  iconUrl: User,
  //iconRetinaUrl: require('../assets/icons/RSVamos_LocationPageIcon.svg'),
  //iconAnchor: null,
  //popupAnchor: null,
  //shadowUrl: null,
  //shadowSize: null,
  //shadowAnchor: null,
  iconSize: new L.Point(40, 50),
  className: 'leaflet-div-icon'
});

export { iconPerson };

const Test = () => {
  const position = [28.107, -15.445]
  return (
    <Wrapper>
      <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker id="marker" position={position} icon={iconPerson}>
        </Marker>
      </MapContainer>
    </Wrapper>
  )
}

export default Test;

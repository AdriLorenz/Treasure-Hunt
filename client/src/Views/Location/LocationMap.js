import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
// Styles
import { Wrapper } from "./Location.style";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css";
// Images
import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg"
import Back from "../../assets/icons/RSVamos_ArrowBackIcon.svg"
import User from "../../assets/icons/RSVamos_ProfilePageIcon.svg";

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

const LocationMap = () => {
  // var map = L.map('map').setView([0, 0], 1);

  // L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=JOlz41XxkLHFZF3Ss33g', {
  //   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

  // }).addTo(map);

  const position = [28.107, -15.445]

  function dropDown(el) {
    let figure = el.parentElement;
    let info = figure.querySelector(".mapInfo");
    let text = figure.querySelector(".textMap");
    let section = figure.querySelector(".map");

    figure.classList.toggle("onClickFigureMap");
    info.classList.toggle("onClickInfoMap");
    text.classList.toggle("onClickTextMap");
    section.classList.toggle("onClickSectionMap");
  }
  return (
    <Wrapper>
      <Link to="/LocationStep3">
        <img src={Back} alt="Not-Found" id="arrowBackIconMap" />
      </Link>
      <section className="map" id="mapSection">
        <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker id="marker" position={position} icon={iconPerson}>
          </Marker>
        </MapContainer>
        <figure className="mapImage">
          <div id="map"></div>
          <img className="mapInfo" src={DropIcon} alt="More info button" onClick={e => dropDown(e.target)} />
          <figcaption className="textMap">
            <p className="descriptionTitles">Distance:</p>
            <p className="descriptionTitles">Duration:</p>

            <p className="descriptionTitles space">Check-points:</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>
            <p className="descriptionPlace">Name of the place</p>
            <p className="descriptionAdress">-Location</p>

            <p className="numberPT">Number PT</p>
          </figcaption>

        </figure>
      </section>
    </Wrapper>

  )
}

export default LocationMap;

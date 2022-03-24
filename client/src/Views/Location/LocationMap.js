import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import "leaflet-routing-machine";
// Styles
import { Wrapper } from "./Location.style";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css";
// Images
import DropIcon from "../../assets/icons/RSVamos_DropIcon.svg";
import Back from "../../assets/icons/RSVamos_ArrowBackIconMap.svg";
import User from "../../assets/icons/RSVamos_ProfilePageIcon.svg";
import Location from "../../assets/icons/RSVamos_LocationPageIcon.svg";



const LocationMap = () => {
  const [refresh, setRefresh] = useState(0);
  const [position, setPosition] = useState([28.107, -15.445]);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  let map = L.map(document.createElement('div'));

  let userCoords = [];

  const marker = new L.Icon({
    iconUrl: Location,
    iconSize: [37, 34]
  })

  const iconPerson = new L.Icon({
    iconUrl: User,
    iconSize: new L.Point(40, 50),
    className: 'leaflet-div-icon'
  });

  function UserLocation() {

    map.locate({
      setView: true,//false
      maxZoom: 16,
    })

    map = useMapEvents({
      locationfound: (location) => {
        let lat = location.latlng.lat;
        let long = location.latlng.lng;
        Waypoints();
        try {
          marker.removeFrom(map)

        } catch {

        } finally {
          // marker = L.marker(
          //     location.latlng,
          //     {
          //         icon: iconPerson,
          //     },
          // ).addTo(map);

        }

      }

    })
    return null;
  }

  function Waypoints() {
    const coord = [
      L.latLng(userCoords[0], userCoords[1]),
      L.latLng(28.130319, -15.446778),
      L.latLng(28.123083, -15.425219),
      L.latLng(28.134688, -15.435307),
      L.latLng(28.140654, -15.429723)
    ];

    L.Routing.control({
      waypoints: coord,
      routeWhileDragging: false,
      showAlternatives: true,
      lineOptions: {
        styles: [
          { color: '#ff5050', opacity: 1, weight: 3 }
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 0
      },
      altLineOptions: {
        styles: [
          { color: '#a2d5e3', opacity: 0.6, weight: 2 }
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 0
      },
      plan: L.Routing.plan(coord, {
        createMarker: function (i, wp, nWbps) {
          if (i === 0) {
            return L.marker(wp.latLng, {
              icon: iconPerson
            });

          } else if (i === 1) {
            return L.marker(wp.latLng, {
              icon: marker
            });

          } else if (i === nWbps - 1) {
            return L.marker(wp.latLng, {
              icon: marker
            });

          } else {
            return L.marker(wp.latLng, {
              icon: marker
            });
          }
        }

        
      })
    }).addTo(map);
    setLoad(true);
    sessionStorage.setItem('loaded', load);
    return null;
  }

  const coords = [
    [28.130319, -15.446778],
    [28.123083, -15.425219],
    [28.134688, -15.435307],
    [28.140654, -15.429723]
  ];

  //const position = [28.107, -15.445];

  const handleLocation = (x, y) => {
    setPosition([x, y]);
  }

  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      handleLocation(position.coords.latitude, position.coords.longitude);
      userCoords = [position.coords.latitude, position.coords.longitude];
      setTimeout(() => {
        setRefresh(refresh + 1);
      }, 1000)
    });
  }

  useEffect(() => {
    componentDidMount()
  }, [refresh]);

  useEffect(() => {
    
    setTimeout(() => {
      if (!sessionStorage.loaded) {
        
        window.location.reload()
      }
    }, 2000)
  }, [])

  const handleBack = () => {
    sessionStorage.removeItem("loaded");
    navigate("/LocationStep3");
  }

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
      <img src={Back} alt="Not-Found" id="arrowBackIconMap" onClick={handleBack} />
      <section className="map" id="mapSection">
        <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker id="marker" position={position} icon={iconPerson}></Marker>
          <UserLocation />
          {/* <Waypoints /> */}
          {/* {coords.map((coord) => (
              <Marker position={coord} icon={marker}></Marker>
          ))} */}
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

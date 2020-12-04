import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "../Map/data/skateboard-parks.json";
import "./style.css";
import MapGL, { NavigationControl, GeolocateControl } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import logo from "../../assets/logo_tp.png";
import redPin from "../../assets/RedPin.svg";
import greenPin from "../../assets/GreenPin.svg";

import ParkingPopup from "../ParkingPopup/index";
import { fromJS } from "immutable";
const mapStyle = fromJS({
  //  version: 11,
  sources: {
    points: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-122.45, 37.78] },
          },
          {
            type: "Feature",
            geometry: { type: "Point", coordinates: [122.45, 37.78] },
          },
          {
            type: "Feature",
            geometry: { type: "Point", coordinates: [122.45, +37.78] },
          },
        ],
      },
    },
  },
  layers: [
    {
      id: "my-layer",
      type: "circle",
      source: "points",
      paint: {
        "circle-color": "#f00",
        "circle-radius": 4,
      },
    },
  ],
});

// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFyc2hvb2RheW91YiIsImEiOiJja2k4MG81d2QwMTcxMnJvNTNrOWZwbzBmIn0.nI-lbYBSz7xNamt-QPx4mQ";

const Example = () => {
  const [selectedPark, setSelectedPark] = useState(null);
  const [selectedParkName, setSelectedParkName] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 32.9374355, // 32.794044,
    longitude: 35.2697695, //34.989571,
    zoom: 15,
    // style:'mapbox://styles/mapbox/streets-v11'
  });
  const styleUrl = "mapbox://styles/mapbox/outdoors-v11"; //"mapbox://styles/marshoodayoub/cki82mo14b4at19quioi8lqdz";

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides,
    });
  }, []);

  return (
    <div className="map_continaer">
      {navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      })}

      <MapGL
        ref={mapRef}
        {...viewport}
        width="100vw"
        height="90vh"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        points
        onClick={(e) => {
          console.log(e);
        }}
      >
        {parkDate.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            {park.properties.availablePlaces > 0 && (
              <img
                className="locationIcon"
                src={greenPin}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPark(park);
                }}
              />
            )}
            {park.properties.availablePlaces <= 0 && (
              <img
                className="locationIcon"
                src={redPin}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPark(park);
                }}
              />
            )}
          </Marker>
        ))}
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="bottom-right"
        />
        {selectedPark
          ? //  alert(selectedPark.properties.NAME),
            (setTimeout(function () {
              setSelectedPark(null);
            }, 200000),
            (
              <Popup
                latitude={selectedPark.geometry.coordinates[1]}
                longitude={selectedPark.geometry.coordinates[0]}
                onClose={() => {
                  setSelectedPark(null);
                }}
              >
                <ParkingPopup selectedPark={selectedPark} />
              </Popup>
            ))
          : null}

        
        <div style={{ position: "absolute", right: "0px" }}>
          <NavigationControl   />
          <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={true}
        />
        <div style={{ position: "absolute", right: "0px" }}>
          <NavigationControl />
        </div>

        {getListOfParkingWithDis()}
        <mapbox-geolocate-control />

        {/* <div style={{ position: "absolute", right: "50%", top: "75%" }}>
            <ParkingPopup />
          </div> */}
      </MapGL>
    </div>
  );

  function getListOfParkingWithDis() {
    const lat1 = 32.9374355,
      lon1 = 35.2697695,
      lat2 = 32.794044,
      lon2 = 34.989571;

    const R = 6371e3; // metres
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = (R * c) / 1000; // in metres
    // d = (d / 1000);
    console.log("dd", d);
  }
};

export default Example;

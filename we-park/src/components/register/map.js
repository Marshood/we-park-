// import React from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// //asdasda
// const mapData = {
//     features: [
//         {
//             type: 'Feature',
//             properties: {
//                 name: 'Canterbury',
//             },
//             geometry: {
//                 coordinates: [172.479644, -43.475418],
//                 type: 'Point',
//             },
//             id: '28682b312c41375af64f65b452c4c32c',
//         },
//         {
//             type: 'Feature',
//             properties: {
//                 name: 'Southland',
//             },
//             geometry: {
//                 coordinates: [167.905597, -45.838703],
//                 type: 'Point',
//             },
//             id: '317db867d0fc3c2f629cf4cea1df3077',
//         },
//         {
//             type: 'Feature',
//             properties: {
//                 name: 'Gisborne',
//             },
//             geometry: {
//                 coordinates: [177.926385, -38.53651],
//                 type: 'Point',
//             },
//             id: '3b30468c228e2ee576cc1943f86dfe75',
//         },
//         {
//             type: 'Feature',
//             properties: {
//                 name: 'Manawatu - Wanganui',
//             },
//             geometry: {
//                 coordinates: [175.434562, -39.524608],
//                 type: 'Point',
//             },
//             id: '79df70a0e4371c7eb0d7db4db9a86b06',
//         },
//         {
//             type: 'Feature',
//             properties: {
//                 name: 'West Coast',
//             },
//             geometry: {
//                 coordinates: [172.185093, -41.514477],
//                 type: 'Point',
//             },
//             id: '7f471be1cdfe51a2b5d7ca0c5c826c64',
//         },
//         {
//             type: 'Feature',
//             properties: {
//                 name: 'Nelson / Tasman / Marlborough',
//             },
//             geometry: {
//                 coordinates: [172.981906, -41.267511],
//                 type: 'Point',
//             },
//             id: '806c715276e1ef82edd796e5934f8e4a',
//         },
//         {
//             type: 'Feature',
//             properties: {
//                 name: 'Wellington - Wairarapa',
//             },
//             geometry: {
//                 coordinates: [175.486838, -41.197457],
//                 type: 'Point',
//             },
//             id: '9768592cef2eee2dc7f6e874e1944084',
//         },
//     ],
//     type: 'FeatureCollection',
// }

// ///asdasdasdasda
// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };
// const coordinates = {
//     lat: 32.794044,
//     lng: 34.989571
// }

// const Map = (props) => {
//     const [map, setMap] = React.useState(null)

//     const Map = ReactMapboxGl({
//         accessToken:
//             'pk.eyJ1IjoibWFyc2hvb2RheW91YiIsImEiOiJja2k4MG81d2QwMTcxMnJvNTNrOWZwbzBmIn0.nI-lbYBSz7xNamt-QPx4mQ'
//         , addLayer: {
//             id: 'points',
//             source: 'pointsSource',
//             type: 'circle',
//             paint: {
//                 'circle-radius': {
//                     'property': 'radius',
//                     'type': 'identity'
//                 },
//                 'circle-color': 'red',
//                 'circle-opacity': 13
//             }
//         },

//     });
//     const geocoder = new MapboxGeocoder({ // Initialize the geocoder
//         accessToken: mapboxgl.accessToken, // Set the access token
//         mapboxgl: mapboxgl, // Set the mapbox-gl instance
//         marker: false, // Do not use the default marker style
//         placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
//         bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
//         proximity: {
//           longitude: -122.25948,
//           latitude: 37.87221
//         } // Coordinates of UC Berkeley
//       });
//     return (
//         <div>
//             <Map
//                 style='mapbox://styles/marshoodayoub/cki82mo14b4at19quioi8lqdz'
//                 containerStyle={{
//                     width: '400px',
//                     height: '400px',
//                 }}
//                 center={[coordinates.lng, coordinates.lat]}
//                 onClick={(map, e) => console.log(e)}
//             >
//                 {/* <Layer type="symbol" id="points" layout={{ 'icon-image': 'marker-15' }}>
//                     <Feature coordinates={[coordinates.lng, coordinates.lat]}/>
//                 </Layer> */}
//                 <Layer
//                     type="symbol"
//                     id="marker"
//                     layout={{
//                         "icon-image": "customImage",
//                         "icon-allow-overlap": false
//                     }}>
//                     <Feature
//                         key="1"
//                         coordinates={[-0.2416815, 51.5285582]} />
//                     <Feature
//                         key="2"
//                         coordinates={[-0.3416815, 51.6285582]} />
//                 </Layer>
//             </Map>
//             {/* <Source id="New Zealand" type="geojson" data={mapData} /> */}

//         </div>
//     )
// }

// export default React.memo(Map)
//
//
//
//
//
//
//
//
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "../register/data/skateboard-parks.json";
import "./map.css";
import MapGL, { NavigationControl, GeolocateControl } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
//00000000000000000000000000000000000000000000
import logo from "../../assets/logo_tp.png";
import ParkingPopup from "../ParkingPopup/index";
import { fromJS } from "immutable";
import NavBar from "../NavBar/NavBar";
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
    zoom: 50,
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
    <div>
      <NavBar />
      <div className="map_continaer">
        <div>
          <img className="logo__tp" src={logo} />
          {/* <h2 className="App_title"> We Park</h2> */}
        </div>

        {navigator.geolocation.getCurrentPosition(function (position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        })}
        <MapGL
          ref={mapRef}
          {...viewport}
          width="90vw"
          height="70vh"
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
              <button
                className="marker-btn button1 "
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPark(park);
                }}
              >
                {park.properties.NAME}
                <br></br>
                {park.properties.PARK_ID}
              </button>
            </Marker>
          ))}

          {selectedPark
            ? //  alert(selectedPark.properties.NAME),
              (setTimeout(function () {
                setSelectedPark(null);
              }, 3000),
              (
                <Popup
                  latitude={selectedPark.geometry.coordinates[1]}
                  longitude={selectedPark.geometry.coordinates[0]}
                  onClose={() => {
                    setSelectedPark(null);
                  }}
                >
                  <ParkingPopup />

                  <div>
                    <h2>{selectedPark.properties.NAME}</h2>
                    <p>{selectedPark.properties.DESCRIPTIO}</p>
                  </div>
                </Popup>
              ))
            : null}

          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            showUserLocation={true}
          />
          <div style={{ position: "absolute", right: 0 }}>
            <NavigationControl />
          </div>

          {getListOfParkingWithDis()}
          <mapbox-geolocate-control />
        </MapGL>
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="bottom-right"
        />
      </div>
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

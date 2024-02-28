import React from "react";
import { useGeolocated } from "react-geolocated";
import GoogleMapReact from "google-map-react";
import { Map } from "@vis.gl/react-google-maps";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function LocationUser() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  const defaultProps = {
    center: {
      lat: 23.0039017,
      lng: 72.5008743,
    },
    zoom: 11,
  };
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{coords.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{coords.speed}</td>
          </tr>
        </tbody>
         
      </table>
      {/* <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={23.0039017} lng={72.5008743} text="My Marker" />
        </GoogleMapReact>
      </div> */}
      <Map
        defaultCenter={{ lat: 23.0039017, lng: 72.5008743 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}

export default LocationUser;

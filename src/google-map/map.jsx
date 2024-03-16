import { Circle, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useCallback, useMemo, useRef, useState } from "react";
import Places from "./places";

const Map = () => {
  const mapRef = useRef();
  const [office, setOffice] = useState();
  const center = useMemo(() => ({ lat: 23.3453453, lng: 90.543433 }), []);
  const options = useMemo(
    () => ({
      mapId: "3d9b72b90526e8f1",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onload = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div className="container">
      <div className="controls">
        <h2>Left Sidebar</h2>
        <Places
          setOffice={(position) => {
            setOffice(position);
            mapRef.current?.panTo(position);
          }}
        />
      </div>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          options={options}
          onload={onload}
          mapContainerClassName="map-container"
        >
          {office && (
            <>
              <Marker position={office} icon="" />

              <Circle center={office} radius={15000} options={closeOptions} />
              <Circle center={office} radius={30000} options={middleOptions} />
              <Circle center={office} radius={45000} options={farOptions} />
            </>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

export default Map;

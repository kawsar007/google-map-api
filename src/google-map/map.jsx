import { GoogleMap } from "@react-google-maps/api";
import React, { useCallback, useMemo, useRef } from "react";

const Map = () => {
  const mapRef = useRef();
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
      </div>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          options={options}
          onload={onload}
          mapContainerClassName="map-container"
        ></GoogleMap>
      </div>
    </div>
  );
};

export default Map;

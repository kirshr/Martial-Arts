import React, { useEffect, useRef, ReactElement } from "react";

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
      markerRef.current = new window.google.maps.Marker({
        position: center,
        map,
        title: "My Pin",
      });
    }
  }, [center, zoom]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
}

export default MyMapComponent;

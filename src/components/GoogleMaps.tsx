import React, { useState, useEffect } from 'react';

interface MapProps {
    apiKey: string;
    lat: number;
    lng: number;
}

const Map: React.FC<MapProps> = ({ apiKey, lat, lng }) => {
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.onload = () => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: lat, lng: lng },
        zoom: 16
      });
              // Add a pin marker to the map
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
      });
      setMap(map);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [apiKey]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default Map;

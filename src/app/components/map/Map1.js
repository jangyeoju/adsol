import { useState, useEffect, useRef } from 'react';

const Map1 = () => {
  const [map, setMap] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const newMap = new window.google.maps.Map(ref.current, {
      center: { lat: 37.29576, lng: 126.8372 },
      zoom: 16,
    });

    setMap(newMap);

    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { address: 'Your Address Here', language: 'en' },
      function (results, status) {
        if (status === 'OK') {
          newMap.setCenter(results[0].geometry.location);
        }
      }
    );
  }, []);

  return <div ref={ref} id="map"></div>;
};

export default Map1;

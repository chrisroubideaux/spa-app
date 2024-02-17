// maps component
import React from 'react';
import GoogleMapReact from 'google-map-react';

interface SimpleMapProps {
  chicagoTimeZoneOffset: number;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ chicagoTimeZoneOffset }) => {
  const defaultProps = {
    center: {
      lat: 41.8781,
      lng: -87.6298,
    },
    zoom: 11,
  };

  return (
    <div className="container-fluid card" style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDWcgwIWNx3EG26ctbNi_Uru0QGetQkW48' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={41.8781} lng={-87.6298} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

const Marker: React.FC<{ lat: number; lng: number; text: string }> = ({ text }) => (
  <div style={{ color: 'red', fontWeight: 'bold' }}>
    {text}
  </div>
);

export default SimpleMap;

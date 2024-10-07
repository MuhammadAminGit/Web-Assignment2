import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define custom icon for the markers
const customMarkerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

// Marker data
const markers = [
  { coords: [31.230391, 121.473701], name: 'Shanghai' },
  { coords: [28.704060, 77.102493], name: 'Delhi' },
  { coords: [6.524379, 3.379206], name: 'Lagos' },
  { coords: [35.689487, 139.691711], name: 'Tokyo' },
  { coords: [23.129110, 113.264381], name: 'Guangzhou' },
  { coords: [40.7127837, -74.0059413], name: 'New York' },
  { coords: [34.052235, -118.243683], name: 'Los Angeles' },
  { coords: [41.878113, -87.629799], name: 'Chicago' },
  { coords: [51.507351, -0.127758], name: 'London' },
  { coords: [40.416775, -3.703790], name: 'Madrid' }
];

const MapChart = () => {
  return (
    <div id="world_map" className="map-container" style={{ height: '400px', width: '100%' }}>
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        {/* Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Map Markers */}
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.coords} icon={customMarkerIcon}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapChart;

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Smart bin locations with fill levels
const smartBins = [
  { id: 1, position: [12.9716, 77.5946] as LatLngExpression, fillLevel: 25, status: 'low', address: 'MG Road, Bangalore' },
  { id: 2, position: [12.9656, 77.6050] as LatLngExpression, fillLevel: 65, status: 'medium', address: 'Indiranagar, Bangalore' },
  { id: 3, position: [12.9784, 77.5775] as LatLngExpression, fillLevel: 40, status: 'low', address: 'Cubbon Park, Bangalore' },
  { id: 4, position: [12.9352, 77.6245] as LatLngExpression, fillLevel: 90, status: 'high', address: 'Koramangala, Bangalore' },
  { id: 5, position: [12.9850, 77.5533] as LatLngExpression, fillLevel: 15, status: 'low', address: 'Malleshwaram, Bangalore' },
  { id: 6, position: [12.9550, 77.5890] as LatLngExpression, fillLevel: 70, status: 'medium', address: 'Jayanagar, Bangalore' },
  { id: 7, position: [12.9250, 77.5850] as LatLngExpression, fillLevel: 30, status: 'low', address: 'JP Nagar, Bangalore' },
];

// Optimized collection route
const collectionRoute: LatLngExpression[] = [
  [12.9352, 77.6245], // Start from high-priority bin
  [12.9656, 77.6050],
  [12.9550, 77.5890],
  [12.9716, 77.5946],
  [12.9784, 77.5775],
  [12.9850, 77.5533],
  [12.9250, 77.5850],
];

// Custom marker icons based on fill level
const createBinIcon = (status: string) => {
  const color = status === 'high' ? '#ef4444' : status === 'medium' ? '#f59e0b' : '#22c55e';
  
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
        <circle cx="12" cy="12" r="10" fill="${color}" stroke="white" stroke-width="2"/>
        <path d="M8 8h8v10H8z" fill="white" opacity="0.8"/>
        <path d="M7 8h10v2H7z" fill="white"/>
      </svg>
    `)}`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
};

interface SmartBinMapProps {
  className?: string;
}

const SmartBinMap = ({ className = '' }: SmartBinMapProps) => {
  // Center on Bangalore, India
  const center: LatLngExpression = [12.9716, 77.5946];

  return (
    <MapContainer
      center={center}
      zoom={13}
      className={`rounded-lg ${className}`}
      style={{ height: '100%', width: '100%', minHeight: '350px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Collection Route */}
      <Polyline
        positions={collectionRoute}
        pathOptions={{
          color: 'hsl(142, 76%, 36%)',
          weight: 3,
          opacity: 0.8,
          dashArray: '10, 10',
        }}
      />
      
      {/* Smart Bin Markers */}
      {smartBins.map((bin) => (
        <Marker
          key={bin.id}
          position={bin.position}
          icon={createBinIcon(bin.status)}
        >
          <Popup>
            <div className="p-2">
              <h4 className="font-semibold text-gray-900">Smart Bin #{bin.id}</h4>
              <p className="text-sm text-gray-600">{bin.address}</p>
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Fill Level:</span>
                  <span className={`font-medium ${
                    bin.status === 'high' ? 'text-red-600' : 
                    bin.status === 'medium' ? 'text-amber-600' : 'text-green-600'
                  }`}>
                    {bin.fillLevel}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      bin.status === 'high' ? 'bg-red-500' : 
                      bin.status === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${bin.fillLevel}%` }}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Status: {bin.status === 'high' ? 'Needs Collection' : 
                        bin.status === 'medium' ? 'Monitor' : 'OK'}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SmartBinMap;

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import { Trash2, Zap, TruckIcon, AlertTriangle, CheckCircle2, ArrowRight, Gauge, Recycle, Factory } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Main Smart Bins (centralized collection points)
const mainBins = [
  { 
    id: 'M01', 
    position: [12.9716, 77.5946] as LatLngExpression, 
    fillLevel: 78, 
    shredderActive: true,
    volumeReduction: 65,
    wasteComposition: { organic: 40, plastic: 30, paper: 20, metal: 10 },
    connectedMiniBins: ['m1', 'm2', 'm3', 'm4'],
    address: 'MG Road Junction, Bangalore',
    status: 'active',
    predictedOverflow: '2.5 hours'
  },
  { 
    id: 'M02', 
    position: [12.9352, 77.6245] as LatLngExpression, 
    fillLevel: 92, 
    shredderActive: true,
    volumeReduction: 70,
    wasteComposition: { organic: 35, plastic: 35, paper: 18, metal: 12 },
    connectedMiniBins: ['m5', 'm6', 'm7'],
    address: 'Koramangala 4th Block, Bangalore',
    status: 'critical',
    predictedOverflow: '30 mins'
  },
  { 
    id: 'M03', 
    position: [12.9850, 77.5533] as LatLngExpression, 
    fillLevel: 45, 
    shredderActive: false,
    volumeReduction: 60,
    wasteComposition: { organic: 50, plastic: 25, paper: 15, metal: 10 },
    connectedMiniBins: ['m8', 'm9', 'm10'],
    address: 'Malleshwaram Circle, Bangalore',
    status: 'normal',
    predictedOverflow: '8 hours'
  },
];

// Mini Bins (street-level collection points)
const miniBins = [
  // Connected to M01
  { id: 'm1', position: [12.9740, 77.5920] as LatLngExpression, fillLevel: 62, mainBin: 'M01', location: 'Bus Stop - Brigade Road', transferring: false },
  { id: 'm2', position: [12.9700, 77.5970] as LatLngExpression, fillLevel: 45, mainBin: 'M01', location: 'Street Corner - Church St', transferring: false },
  { id: 'm3', position: [12.9680, 77.5930] as LatLngExpression, fillLevel: 78, mainBin: 'M01', location: 'Metro Station Exit', transferring: true },
  { id: 'm4', position: [12.9750, 77.5980] as LatLngExpression, fillLevel: 33, mainBin: 'M01', location: 'Park Entrance', transferring: false },
  // Connected to M02
  { id: 'm5', position: [12.9380, 77.6220] as LatLngExpression, fillLevel: 71, mainBin: 'M02', location: 'Forum Mall Entrance', transferring: true },
  { id: 'm6', position: [12.9320, 77.6280] as LatLngExpression, fillLevel: 55, mainBin: 'M02', location: 'Bus Stop - 80ft Road', transferring: false },
  { id: 'm7', position: [12.9370, 77.6200] as LatLngExpression, fillLevel: 88, mainBin: 'M02', location: 'Junction - Sony Signal', transferring: true },
  // Connected to M03
  { id: 'm8', position: [12.9880, 77.5560] as LatLngExpression, fillLevel: 25, mainBin: 'M03', location: 'Mantri Mall Side', transferring: false },
  { id: 'm9', position: [12.9820, 77.5500] as LatLngExpression, fillLevel: 40, mainBin: 'M03', location: 'Sampige Road', transferring: false },
  { id: 'm10', position: [12.9870, 77.5580] as LatLngExpression, fillLevel: 65, mainBin: 'M03', location: 'Temple Street', transferring: true },
];

// Optimized truck route (main bins only)
const truckRoute: LatLngExpression[] = [
  [12.9352, 77.6245], // M02 - Critical first
  [12.9716, 77.5946], // M01
  [12.9850, 77.5533], // M03
];

// Create custom icons
const createMainBinIcon = (status: string) => {
  const color = status === 'critical' ? '#ef4444' : status === 'active' ? '#f59e0b' : '#22c55e';
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
        <rect x="4" y="8" width="32" height="28" rx="4" fill="${color}" stroke="white" stroke-width="2"/>
        <rect x="8" y="4" width="24" height="6" rx="2" fill="${color}" stroke="white" stroke-width="2"/>
        <text x="20" y="26" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text>
      </svg>
    `)}`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};

const createMiniBinIcon = (fillLevel: number, transferring: boolean) => {
  const color = fillLevel >= 60 ? '#f59e0b' : '#22c55e';
  const pulse = transferring ? 'animate' : '';
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="10" fill="${color}" stroke="white" stroke-width="2" ${pulse ? 'opacity="0.8"' : ''}/>
        <rect x="8" y="7" width="8" height="10" rx="1" fill="white" opacity="0.9"/>
      </svg>
    `)}`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

// Pipeline component
const PipelineConnection = ({ from, to, isActive }: { from: LatLngExpression; to: LatLngExpression; isActive: boolean }) => {
  return (
    <Polyline
      positions={[from, to]}
      pathOptions={{
        color: isActive ? '#3b82f6' : '#64748b',
        weight: isActive ? 3 : 2,
        opacity: isActive ? 0.9 : 0.4,
        dashArray: isActive ? '8, 8' : '4, 4',
        className: isActive ? 'pipeline-active' : '',
      }}
    />
  );
};

interface SmartWasteSystemProps {
  view: 'overview' | 'main-bin' | 'route' | 'analytics';
  selectedMainBin?: string;
}

const SmartWasteSystem = ({ view, selectedMainBin }: SmartWasteSystemProps) => {
  const [animatedBins, setAnimatedBins] = useState<string[]>([]);
  const [truckPosition, setTruckPosition] = useState(0);

  // Simulate pipeline transfers
  useEffect(() => {
    const interval = setInterval(() => {
      const transferringBins = miniBins.filter(b => b.fillLevel >= 60).map(b => b.id);
      setAnimatedBins(transferringBins);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animate truck along route
  useEffect(() => {
    if (view === 'route') {
      const interval = setInterval(() => {
        setTruckPosition(prev => (prev + 1) % truckRoute.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [view]);

  const center: LatLngExpression = [12.9600, 77.5900];

  return (
    <MapContainer
      center={center}
      zoom={13}
      className="rounded-lg"
      style={{ height: '100%', width: '100%', minHeight: '400px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Pipeline Connections */}
      {view === 'overview' && miniBins.map(miniBin => {
        const mainBin = mainBins.find(m => m.id === miniBin.mainBin);
        if (!mainBin) return null;
        return (
          <PipelineConnection
            key={miniBin.id}
            from={miniBin.position}
            to={mainBin.position}
            isActive={miniBin.fillLevel >= 60}
          />
        );
      })}

      {/* Mini Bins */}
      {(view === 'overview' || view === 'main-bin') && miniBins
        .filter(b => !selectedMainBin || b.mainBin === selectedMainBin)
        .map(bin => (
          <Marker
            key={bin.id}
            position={bin.position}
            icon={createMiniBinIcon(bin.fillLevel, bin.fillLevel >= 60)}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <Trash2 className="h-4 w-4 text-gray-600" />
                  <h4 className="font-semibold text-gray-900">Mini Bin {bin.id.toUpperCase()}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{bin.location}</p>
                
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Fill Level:</span>
                      <span className={`font-medium ${bin.fillLevel >= 60 ? 'text-amber-600' : 'text-green-600'}`}>
                        {bin.fillLevel}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${bin.fillLevel >= 60 ? 'bg-amber-500' : 'bg-green-500'}`}
                        style={{ width: `${bin.fillLevel}%` }}
                      />
                    </div>
                  </div>
                  
                  {bin.fillLevel >= 60 && (
                    <div className="flex items-center gap-2 text-blue-600 text-sm bg-blue-50 p-2 rounded">
                      <Zap className="h-4 w-4" />
                      <span>Pipeline transfer active → {bin.mainBin}</span>
                    </div>
                  )}
                  
                  <p className="text-xs text-gray-500">
                    Connected to: Main Bin {bin.mainBin}
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

      {/* Main Bins */}
      {mainBins
        .filter(b => !selectedMainBin || b.id === selectedMainBin)
        .map(bin => (
          <Marker
            key={bin.id}
            position={bin.position}
            icon={createMainBinIcon(bin.status)}
          >
            <Popup>
              <div className="p-2 min-w-[280px]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Factory className="h-5 w-5 text-gray-700" />
                    <h4 className="font-bold text-gray-900">Main Bin {bin.id}</h4>
                  </div>
                  {bin.status === 'critical' && (
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                      CRITICAL
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{bin.address}</p>
                
                {/* Capacity Meter */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Capacity:</span>
                    <span className={`font-bold ${
                      bin.fillLevel >= 90 ? 'text-red-600' : 
                      bin.fillLevel >= 70 ? 'text-amber-600' : 'text-green-600'
                    }`}>
                      {bin.fillLevel}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        bin.fillLevel >= 90 ? 'bg-red-500' : 
                        bin.fillLevel >= 70 ? 'bg-amber-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${bin.fillLevel}%` }}
                    />
                  </div>
                </div>

                {/* Shredder Status */}
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded mb-2">
                  <div className="flex items-center gap-2">
                    <Recycle className={`h-4 w-4 ${bin.shredderActive ? 'text-green-600 animate-spin' : 'text-gray-400'}`} style={{ animationDuration: '3s' }} />
                    <span className="text-sm">Shredder</span>
                  </div>
                  <span className={`text-sm font-medium ${bin.shredderActive ? 'text-green-600' : 'text-gray-500'}`}>
                    {bin.shredderActive ? 'Active' : 'Standby'}
                  </span>
                </div>

                {/* Volume Reduction */}
                <div className="flex items-center justify-between p-2 bg-emerald-50 rounded mb-2">
                  <span className="text-sm text-emerald-700">Volume Reduced:</span>
                  <span className="text-sm font-bold text-emerald-700">{bin.volumeReduction}%</span>
                </div>

                {/* Waste Composition */}
                <div className="mb-2">
                  <p className="text-xs font-medium text-gray-600 mb-1">Waste Composition:</p>
                  <div className="flex h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500" style={{ width: `${bin.wasteComposition.organic}%` }} title="Organic" />
                    <div className="bg-blue-500" style={{ width: `${bin.wasteComposition.plastic}%` }} title="Plastic" />
                    <div className="bg-amber-500" style={{ width: `${bin.wasteComposition.paper}%` }} title="Paper" />
                    <div className="bg-slate-500" style={{ width: `${bin.wasteComposition.metal}%` }} title="Metal" />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>Organic {bin.wasteComposition.organic}%</span>
                    <span>Plastic {bin.wasteComposition.plastic}%</span>
                    <span>Paper {bin.wasteComposition.paper}%</span>
                    <span>Metal {bin.wasteComposition.metal}%</span>
                  </div>
                </div>

                {/* Prediction */}
                <div className={`flex items-center gap-2 p-2 rounded text-sm ${
                  bin.status === 'critical' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'
                }`}>
                  <AlertTriangle className="h-4 w-4" />
                  <span>Predicted overflow: {bin.predictedOverflow}</span>
                </div>

                {/* Connected Mini Bins */}
                <p className="text-xs text-gray-500 mt-2">
                  {bin.connectedMiniBins.length} mini bins connected
                </p>
              </div>
            </Popup>
          </Marker>
        ))}

      {/* Truck Route (only in route view) */}
      {view === 'route' && (
        <>
          <Polyline
            positions={truckRoute}
            pathOptions={{
              color: '#8b5cf6',
              weight: 4,
              opacity: 0.8,
            }}
          />
          {/* Truck position indicator */}
          <CircleMarker
            center={truckRoute[truckPosition]}
            radius={12}
            pathOptions={{
              color: '#8b5cf6',
              fillColor: '#8b5cf6',
              fillOpacity: 1,
            }}
          />
        </>
      )}
    </MapContainer>
  );
};

export default SmartWasteSystem;

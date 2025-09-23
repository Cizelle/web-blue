import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup, // Import the ZoomableGroup component
} from 'react-simple-maps';

// Import your GeoJSON file from assets
import indiaMapData from '../../assets/india.geojson';

// Define a type for the geography object.
// This matches the structure provided by the library.
interface CustomGeography {
  rsmKey: string;
  properties: {
    name: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][];
  };
}

const IndiaMap = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ComposableMap
        projection="geoMercator"
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup center={[80, 22]} zoom={1}>
          <Geographies geography={indiaMapData}>
            {({ geographies }: { geographies: CustomGeography[] }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#D6E2E2',
                      stroke: '#FFF',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#A6C8C8',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#7A9A9A',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default IndiaMap;
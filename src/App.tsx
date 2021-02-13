import React from 'react';
import mapboxgl from 'mapbox-gl';

import {DataProvider} from "./contexts/DataContext"

// components
import {Form, Map} from "./components"

// style
import "./App.css"
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  // eslint-disable-next-line 
  (mapboxgl as any).workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
  return (
    <DataProvider>
      <main className="home">
        <Form />
        <Map />
      </main>
    </DataProvider>
  );
}

export default App;

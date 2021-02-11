import React from 'react';

// components
import {Form, Map} from "./components"

// style
import "./App.css"
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  return (
    <main className="home">
      <Form />
      <Map />
    </main>
  );
}

export default App;

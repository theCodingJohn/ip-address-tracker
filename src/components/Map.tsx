import { useState } from 'react'
import ReactMapboxGl, {Marker} from 'react-mapbox-gl';
import {MapStyle, Coordinates} from "./store/types"

const MapView = ReactMapboxGl({
  accessToken: `${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`,
});

const Map = () => {
  const [mapStyle] = useState<MapStyle>({
    style: "mapbox://styles/mapbox/streets-v8",
    className: "map",
    zoom: [14],
    center: [121.041808, 14.403804],
  })
// eslint-disable-next-line 
  const [marker, setMarker] = useState<Coordinates>({
    coordinates: [121.041808, 14.403804]
  })

  return (
    <MapView {...mapStyle}>
      <Marker {...marker}>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56"><path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>
      </Marker>
    </MapView>
  )
}

export default Map
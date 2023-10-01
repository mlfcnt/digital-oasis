"use client";

import Mapbox, { CircleLayer, Layer, Source } from "react-map-gl";

export const Map = () => {
  const geojson: any = {
    type: "FeatureCollection",
    features: [
      // amsterdam
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [4.9, 52.378] },
      },
      // paris
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [2.35, 48.8566] },
      },
      // pragues
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [14.4378, 50.0755] },
      },
      // chambery
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [5.9178, 45.5646] },
      },
      // barcelona
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [2.1686, 41.3874] },
      },
    ],
  };

  const layerStyle: CircleLayer = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#007cbf",
    },
  };
  return (
    <Mapbox
      mapboxAccessToken="pk.eyJ1IjoidG1uanMiLCJhIjoiY2xuNzZ0MzhvMDhvcDJscnR4dG1ibWtsbCJ9.8gCoBwW386bf-4AjLhYCqw"
      initialViewState={{
        longitude: 4.633023,
        latitude: 46.915028,
        zoom: 4,
      }}
      style={{ width: "90%", height: 800, margin: "auto" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </Mapbox>
  );
};

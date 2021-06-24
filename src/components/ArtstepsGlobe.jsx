import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { countries } from "./exhibitions";

const MAP_CENTER = { lat: 61.210817, lng: 35.650072, altitude: 0.4 };

const World = () => {
  console.log(countries);
  const globeEl = useRef();
  useEffect(() => {
    // Auto-rotate
    // globeEl.current.controls().autoRotate = true;
    // globeEl.current.controls().autoRotateSpeed = 1;
    //globeEl.current.pointOfView({ altitude: 2 }, 5000);
    globeEl.current.pointOfView(MAP_CENTER, 4000);
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonColor={() =>
        `#${Math.round(Math.random() * Math.pow(2, 24))
          .toString(16)
          .padStart(6, "0")}`
      }
      hexPolygonLabel={({ properties }) => `
      <b>${properties.ADMIN} (${properties.ISO_A2})</b> <br />
      Population: <i>${properties.POP_EST}</i>
    `}
    />
  );
};

export default World;

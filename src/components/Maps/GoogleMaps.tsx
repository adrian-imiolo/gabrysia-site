import { useEffect, useRef } from "react";
import { addSingleMarkers } from "./AddSingleMarkers";

const DEFAULT_CENTER = { lat: 51.10490417480469, lng: 17.024499893188477 };
const DEFAULT_ZOOM = 15;


export const GoogleMaps = ({
    locations,
    className,
  }: {
    locations: ReadonlyArray<google.maps.LatLngLiteral>;
    className?: string;
  }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
      addSingleMarkers({locations, map})
    }
  }, [ref, locations]);

  return (
    <div
      ref={ref}
      style={{ width: "90vw", height: "60vh", margin: "0 auto" }}
    />
  );
};
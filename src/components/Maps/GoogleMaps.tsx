import { useEffect, useRef } from "react";
import { addSingleMarkers } from "./AddSingleMarkers";

const DEFAULT_CENTER = { lat: 51.10490417480469, lng: 17.024499893188477 };
const DEFAULT_ZOOM = 16;

export const GoogleMaps = ({
  locations,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
      addSingleMarkers({ locations, map });
    }
  }, [ref, locations]);

  return (
    <div
      ref={ref}
      style={{
        // width: "1440px",
        height: "50vh",
        margin: "0 auto",
      }}
      className="maps"
    />
  );
};

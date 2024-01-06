import { GoogleMapsWrapper } from "./GoogleMapsWrapper";
import { GoogleMaps } from "./GoogleMaps";

export const LOCATIONS = [
    { lat: 51.10490417480469, lng: 17.024499893188477 },
  ];

export const MapComponent = () => (
    <GoogleMapsWrapper>
      <GoogleMaps locations={LOCATIONS} />
    </GoogleMapsWrapper>
  );
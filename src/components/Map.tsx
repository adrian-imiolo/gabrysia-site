import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Library } from '@googlemaps/js-api-loader';




const libraries: Library[] = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '80vh',
};
const center = {
  lat: 51.10490417480469, 
  lng: 17.024499893188477, 
};

export const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCmPmsAjnDUCRhxJVtF2Iv6K0MBvY6j1JA',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Ładowanie mapy...</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

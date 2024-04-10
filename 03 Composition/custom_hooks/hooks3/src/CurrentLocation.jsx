import {useCurrentLocation} from './useCurrentLocation';

export function CurrentLocation () {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
};
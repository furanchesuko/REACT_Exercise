import { useState, useEffect } from 'react';

export function useCurrentLocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    setLoading(false);
                },
                (error) => {
                    setError(error);
                    setLoading(false);
                }
            );
        };

        if (navigator.geolocation) {
            getLocation();
        } else {
            setError(new Error('Geolocation is not supported'));
            setLoading(false);
        }
    }, []);

    function getCurrentLocation() {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                setLoading(false);
            },
            (error) => {
                setError(error);
                setLoading(false);
            }
        );
    };

    return { location, error, loading, getCurrentLocation };
};
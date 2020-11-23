import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
    const [location, setLocation] = useState();
    const getPermission = async function () {
        const results = await Location.requestPermissionsAsync()

        if (!results.granted) return;

        const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude })

    }

    useEffect(() => {
        getPermission();
    }, [])

    return location;
}
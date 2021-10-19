import { useEffect, useState } from "react";

const useData = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.JSON' )
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return services;
}
export default useData;
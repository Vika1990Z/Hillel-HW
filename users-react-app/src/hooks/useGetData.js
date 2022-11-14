import { useEffect, useState } from "react";

const useGetData = url => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => console.log('data loaded'));
    }, [])

    return {
        data,
        error,
    }
}

export default useGetData;
/* 
    Problem: Fetching data, we need three states.
    (data, loading, error). Also useEffect to 
    trigger fetch and cleanup logic. Doing this
    in component creates a longer file and a mess.

    So this useFetch custom hook.
    Using this in necessary component
    that separates concerns, component should care 
    about what is in screen and custom hook handle how
    data is managed.
*/
import { useState, useEffect } from "react";

const useFetch = (url) => {
    // 3 states
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Controller to cancel the request if component unmounts
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true); // 

            try{
                const response = await fetch(url, {signal: controller.signal});
                if(!response.ok){
                    throw new Error("Could not fetch data.");
                }

                const result =await response.json();
                setData(result);
                setError(null);
            } catch(error){
                if(error.name !== "AbortError") {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        // Call the fetchData function to work
        fetchData();

        // Cleanup: cancel fetch if user navigagtes away: Such a GPT term
        return () => controller.abort();

    }, [url]);

    // return the states carefully as object
    return {data, loading, error};
};

export default useFetch;

import React, { useCallback, useEffect, useState } from 'react'


async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);

    responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData.message || "Something went wronge!");
    }

    return responseData;
}


export default function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = useCallback(async function sendRequest() {
        setIsLoading(true)
        try {
            const resData = await sendHttpRequest();
            setData(resData);
        }
        catch (er) {
            setError(er.message || "Something went wrong!");

        }
        finally {
            setIsLoading(false);
        }
    }, [url, config]);

    useEffect(() => {
        if (config && (config.method === "GET" || !config.method) || !config) {
            sendRequest();
        }
    }, [sendRequest, config]);

    return {
        data, isLoading, error
    }


}



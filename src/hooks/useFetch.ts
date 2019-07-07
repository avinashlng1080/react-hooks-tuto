import { useState, useEffect } from 'react'

export const useFetch = (url: string, initialValue: any) => {
    const [result, setResult] = useState(initialValue)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setResult(json))
    }, [])

    return result
}
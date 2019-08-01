import { useState, useEffect } from 'react'

import { IDynamicTransition } from '../Types'

const  useDynamicTransition = ({ increment, delay, length }: IDynamicTransition) => {
    const [ index, setIndex ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((previousIndex: number) => {
                return (previousIndex + increment) % length
            })
        }, delay)

        // clean up sequence - similar to componentWillUnMount
        return () => {
            clearInterval(interval)
        }
    }, [delay, increment])

    return index
}

export default useDynamicTransition
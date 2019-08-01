import React, { useState } from 'react'

import MATRIX_FRAMES from '../data/matrix'
import useDynamicTransition from '../hooks/useDynamicTransition'


const SECONDS = 1000
const MIN_DELAY = 1 * SECONDS
const MIN_INCREMENT = 1

const Matrix = () => {
    // const [index, setIndex] = useState(0)
    const [increment, setIncrement] = useState(5)
    const [delay, setDelay] = useState(500)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % MATRIX_FRAMES.length)
    //     }, 1000)
    // }, [])

    const index = useDynamicTransition({ increment, delay, length: MATRIX_FRAMES.length })


    const updateDelay = (event: any) => {
        const newDelay = Number(event.target.value * SECONDS)
        setDelay(newDelay < MIN_DELAY ? MIN_DELAY : newDelay)
    }

    const updateIncrement = (event: any) => {
        const increment = Number(event.target.value)
        setIncrement(increment < MIN_INCREMENT ? MIN_INCREMENT : increment)
    }

    return (
        <div className='Matrix'>
            <img src={MATRIX_FRAMES[index]} alt='matrix-animation' />
            <div className='multiform'>
                <div>
                    Frame transition delay ( seconds ) : <input type='number' onChange={updateDelay} />
                </div>
                <div>
                    Frame increment: <input type='number' onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
}

export default Matrix
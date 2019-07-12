import React, { useState, useEffect } from 'react'

import PICTURES from '../data/pictures'

const SECONDS = 1000
const MIN_DELAY = 1 * SECONDS
const MIN_INCREMENT = 1

const Gallery = () => {
    const [index, setIndex] = useState(0)
    const [delay, setDelay] = useState(3 * SECONDS)
    const [increment, setIncrement] = useState(1)

    useEffect(() => {
        console.log('delay and increment', { delay, increment })
        const interval = setInterval(() => {
            // setIndex((index + 1) % PICTURES.length)
            setIndex((previousIndex: number) => {
                return (previousIndex + increment) % PICTURES.length
            }
            )
        }, delay)

        // clean up sequence - similar to componentWillUnMount
        return () => {
            console.log('clearing delay -> ', delay)
            clearInterval(interval)
        }

    }, [delay, increment])

    const updateDelay = (event: any) => {
        const newDelay = Number(event.target.value * SECONDS)
        setDelay(newDelay < MIN_DELAY ? MIN_DELAY : newDelay)
    }

    const updateIncrement = (event: any) => {
        const increment = Number(event.target.value)
        setIncrement(increment < MIN_INCREMENT ? MIN_INCREMENT : increment)
    }


    return (
        <div className='Gallery'>
            <h4>Gallery</h4>
            <img src={PICTURES[index].image} alt='gallery' />
            <div className='multiform'>
                <div>
                    Gallery transition delay ( seconds ): <input type='number' onChange={updateDelay} />
                </div>
                <div>
                    Gallery increment: <input type='number' onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
}

export default Gallery
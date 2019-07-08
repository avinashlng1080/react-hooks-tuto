import React, { useState, useEffect } from 'react'

import PICTURES from '../data/pictures'

const Gallery = () => {
    const [index, setIndex] = useState(0)
    const [delay, setDelay] = useState(3000)
    const [increment, setIncrement] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            // setIndex((index + 1) % PICTURES.length)
            setIndex((previousIndex: number) => {
                return (previousIndex + 1) % PICTURES.length
            }
            )
        }, 3000)

        // clean up sequence - similar to componentWillUnMount
        return () => { clearInterval(interval) }

    }, [])

    const updateDelay = (event: any) => { setDelay(Number(event.target.value * 1000)) }

    return (
        <div className='Gallery'>
            <h4>Gallery</h4>
            <img src={PICTURES[index].image} alt='gallery' />
            <div className='multiform'>
                <div>
                    Gallery transition delay ( seconds ): <input type='number' onChange={updateDelay} />
                </div>
            </div>
        </div>
    )
}

export default Gallery
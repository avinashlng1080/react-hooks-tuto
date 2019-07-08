import React, { useState, useEffect } from 'react'

import PICTURES from '../data/pictures'

const Gallery = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setInterval(() => {
            // setIndex((index + 1) % PICTURES.length)
            setIndex((previousIndex: number) => {
                    return (previousIndex + 1) % PICTURES.length
                }
            )
        }, 3000)
    }, [])

    return (
        <div className='Gallery'>
            <h4>Gallery</h4>
            <img src={PICTURES[index].image} alt='gallery' />
        </div>
    )
}

export default Gallery
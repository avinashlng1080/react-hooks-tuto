import React, { useState, useEffect } from 'react'

import { IStories } from '../Types'
import useFetch from '../hooks/useFetch';

const Stories = () => {
    // const [stories, setStories] = useState<[IStories]>([{
    //     by: '',
    //     descendants: 0,
    //     id: 0,
    //     kids: [0],
    //     score: 0,
    //     time: 0,
    //     title: '',
    //     type: '',
    //     url: ''
    // }])

    // useEffect(() => {
    //     fetch('https://news-proxy-server.appspot.com/topstories')
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log('stories', json)
    //             setStories(json)
    //         })
    // }, [])

    const stories = useFetch('https://news-proxy-server.appspot.com/topstories', [])

    return (
        <div className='Stories'>
            <h2>Hacker News Top Stories</h2>
            {
                stories.map((story: any) => {
                    const { id, by, time, url, title } = story
                    return (
                        <div key={id}>
                            <a href={url}>{title}</a>
                            <div>{by} - {new Date(time * 1000).toLocaleDateString()}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stories
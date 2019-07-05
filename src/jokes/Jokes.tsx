import React, { useState, useEffect } from 'react'
import { IJoke } from '../Types'

const Joke: React.FC = () => {
    const [ joke, setJoke ] = useState<IJoke>({ setup: '', punchline: ''})

    // useEffect is called for each single re-render of your component
    // similar to componentDidMount and componentDidUpdate and lastly componentWillUnmount
    useEffect( () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then( json =>{
             console.log('joke json', json)
             setJoke(json)
        })
    },
    [] // an empty array makes this effect run only once - although it is setting state at line 12 - thus preventing a dead-lock
    )

    const { setup, punchline } = joke 

    return (
        <div>
            <h3> Random Jokes </h3>
            <p><em>{setup}</em></p>
            <p><em>{punchline}</em></p>
        </div>
    )
 }

export default Joke
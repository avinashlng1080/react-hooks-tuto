import React, { useState } from 'react'
import './App.css';

import RandomJoke from './jokes/Jokes'
import Stories from './stories'
import Tasks from './tasks'
import Gallery from './gallery'

const App: React.FC = () => {
  const [userQuery, setUserQuery] = useState('')
  const [showGallery, setShowGallery] = useState(true)

  const updateUserQuery = (event: any) => {
    setUserQuery(event.target.value)
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const toggleGallery = () => {
    setShowGallery(!showGallery)
  }

  return (
    <div className="App">
      <h1>Hello Avinash</h1>
      <RandomJoke />
      <hr />
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <div>
        {showGallery ? <Gallery /> : null}
        <button onClick={toggleGallery}>{showGallery ? 'Hide ' : 'Show '} Gallery</button>
      </div>
      <hr />
      <Tasks />
      <hr />
      <Stories />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [userQuery, setUserQuery] = useState('')

  const updateUserQuery = (event: any) => {
    console.log('userQuery', userQuery)
    setUserQuery(event.target.value)
  }

  const handleKeyPress = (event: any) => { 
    if(event.key === 'Enter'){
      searchQuery()
    }
  }

  const searchQuery = () => { 
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  return (
    <div className="App">
      <h1>Hello Avinash</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress}/>
        <button onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'

const BASE_URL = 'http://localhost:8000'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then(response => response.json())
      .then(data => {
        const reversedPosts = data.reverse()
        setPosts(reversedPosts)
      })
      .catch(error => console.error('Error fetching posts:', error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

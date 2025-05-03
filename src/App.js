import './App.css'
import React, { useEffect, useState } from 'react'
import { BASE_API_URL } from './constants'
import Post from './Post'
import NewPost from './NewPost'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${BASE_API_URL}/posts`)
      .then(response => response.json())
      .then(data => {
        const reversedPosts = data.reverse()
        setPosts(reversedPosts)
      })
      .catch(error => console.error('Error fetching posts:', error))
  }, [])

  return (
    <div className="App">
      <div className="blog-title">Open City Blog</div>
      <div className="posts-container">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="new-post-container">
        <NewPost />
      </div>
    </div>
  );
}

export default App;

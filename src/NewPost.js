import React, { useState } from 'react'
import './NewPost.css'
import { BASE_API_URL } from './constants'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [creator, setCreator] = useState('')

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImageUrl(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', imageUrl)

    const requestOptions = {
      method: 'POST',
      body: formData,
    }

    fetch(`${BASE_API_URL}/posts/image`, requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw response
      })
      .then(data => {
        createPost(data.filename)
      })
      .catch(error => {
        console.error('Error uploading image: ', error)
      })
      .finally(() => {
        // clean up the image upload input
        setImageUrl(null)
        document.getElementById('new-post-image-upload').value = null
      })
  }

  const createPost = (imageUrl) => {
    const jsonString = JSON.stringify({
      title,
      content,
      image_url: imageUrl,
      creator,
    })
    
    const requestOptions = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: jsonString,
    }

    fetch(`${BASE_API_URL}/posts`, requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        
        throw response
      })
      .then(data => {
        window.location.reload()
        window.scrollTo(0, 0)
      })
      .catch(error => {
        console.error('Error creating post: ', error)
      })
  }

  return (
    <div className="new-post">
      <div className="new-post-image">
        <input 
          id="new-post-image-upload"
          type="file"
          onChange={handleImageUpload}
        />
      </div>
      <div className="new-post-creator">
        <input 
          id="new-post-creator-input"
          className="new-post-creator"
          type="text"
          placeholder="Creator"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        />
      </div>
      <div className="new-post-title">
        <input 
          id="new-post-title-input"
          className="new-post-title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="new-post-content">
        <textarea 
          id="new-post-content-textarea"
          className="new-post-content"
          rows={10}
          placeholder="Write about your favorite city..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="create-post">
        <button
          id="create-post-button"
          className="create-post-button"
          onClick={handleSubmit}
          disabled={!imageUrl || !title || !content || !creator}
        >
          <span>Create Post</span>
        </button>
      </div>
    </div>
  )
}

export default NewPost

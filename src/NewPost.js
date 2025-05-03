import React, { useState } from 'react'
import './NewPost.css'
import { BASE_API_URL } from './constants'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [creator, setCreator] = useState('')

  return (
    <div className="new-post">
      <div className="new-post-image">
        <input 
          id="new-post-image-upload"
          type="file"
          onChange={null}
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
          onClick={null}
        >
          <span>Create Post</span>
        </button>
      </div>
    </div>
  )
}

export default NewPost

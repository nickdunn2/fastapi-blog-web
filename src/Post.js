import React, { useState, useEffect } from 'react'
import './Post.css'
import { BASE_API_URL } from './constants'

const Post = ({post}) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl(`${BASE_API_URL}/images/${post.image_url}`)
  }, [post.image_url])

  const handleDelete = (id) => {
    console.log('will delete post with id:', id)
  }

  return (
      <div className="post">
        <img className="post-image" src={imageUrl} alt={post.title + ' image'} />
        <div className="post-container">
          <div className="post-title">{post.title}</div>
          <div className="post-creator">by {post.creator}</div>
          <div className="post-content">{post.content}</div>
          <div className="post-delete">
            <button 
              className="delete-button"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
  )
}

export default Post
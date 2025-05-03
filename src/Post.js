import React, { useState, useEffect } from 'react'
import './Post.css'
import { BASE_API_URL } from './constants'

const Post = ({post}) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl(`${BASE_API_URL}/images/${post.image_url}`)
  }, [post.image_url])

  const handleDelete = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'DELETE',
    }
    
    fetch(`${BASE_API_URL}/posts/${post.id}`, requestOptions)
      .then(response => {
        if (response.ok) {
          window.location.reload()
        }

        throw response
      })
      .catch(error => {
        console.error('Error deleting post with id: ', post.id, error)
      })
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
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
  )
}

export default Post
import React, { useState, useEffect } from 'react'
import './Post.css'
import { BASE_API_URL } from './constants'

const Post = ({post}) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl(`${BASE_API_URL}/images/${post.image_url}`)
  }, [post.image_url])

  return (
      <div className="post">
        <img className="post-image" src={imageUrl} alt={post.title + ' image'} />
      </div>
  )
}

export default Post
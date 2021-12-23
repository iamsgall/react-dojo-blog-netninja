import React from 'react'
import { useParams, useNavigate } from 'react-router'
import useFetch from '../hooks/useFetch'

export default function BlogDetails() {
  const { id } = useParams()
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:4000/blogs/' + id)
  const navigate = useNavigate()

  const handleClick = () => {
    fetch('http://localhost:4000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  )
}

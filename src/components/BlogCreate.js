import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BlogCreate() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const blog = { title, body, author }

    fetch('http://localhost:4000/blogs/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value='author1'>author1</option>
          <option value='author2'>author2</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

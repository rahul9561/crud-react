import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const navigate = useNavigate()
  const submit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3035/products', {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, img })
    }).then(() => navigate('/'));
  }

  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor="Title">Title:</label>
        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} id="Title" />
        <label htmlFor="image">Image:</label>
        <input type="text" name="image" onChange={(e) => setImg(e.target.value)} id="image" />
        <button type='submit'>Add product</button>
      </form>
    </div>
  )
}


export default Add

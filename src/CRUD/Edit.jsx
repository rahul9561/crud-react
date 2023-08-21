import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = (props) => {
    const[title,setTitle]=useState('')
    const {id}=useParams()
  const[img,setImg]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    fetch(`http://localhost:3035/products/${id}`)
    .then(res=>res.json())
    .then(product=>{
        setTitle(product.title);
        setImg(product.img);
    })
  },[])
  const submit=(event)=>{
    event.preventDefault()
    fetch(`http://localhost:3035/products/${id}`,{
            method:'PUT',
          headers:{"content-type":"application/json"},
        body:JSON.stringify({title,img})
      }).then(()=>navigate('/'));
       
      
    }
  return (
    <div>
       <form action="" onSubmit={submit}>
        <label htmlFor="Title">Title:</label>
        <input type="text" name="title" defaultValue={title}  onChange={(e)=>setTitle(e.target.value)} id="Title"/>
        <label htmlFor="image">Image:</label>
        <input type="text" name="image" defaultValue={img}  onChange={(e)=>setImg(e.target.value)} id="image"/>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Edit

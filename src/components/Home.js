import React, { useEffect, useState } from 'react'
import  axios from 'axios';
import './home.css';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthProvider from './AuthContext';

export default function Home() {
const[data,setData]= useState([])


      useEffect(

()=>updatePage()
    ,[]  )

const navigate= useNavigate();

    const deleteit =(id)=>{
      axios.delete(`http://localhost:8080/api/blogs/blog/${id}`)
    .then(
      ()=>{ updatePage()
        navigate('/Home') })

.catch((e)=>console.log(e))
.finally(
  ()=>console.log("finally get it")
)
    

    }

  const updatePage = ()=>{


    axios.get('http://localhost:8080/api/blogs/blog')
    .then((response)=>{  setData(response.data)
     console.log(response.data)
  
    }

)
.catch((e)=>console.log(e))
.finally(
  ()=>console.log("finally get it")
)
    
  }
  

  return (
    <div className="container">
      <h1>Latest Gunasos</h1>
      <div className="blog-list">
        {data.map((entry, index) => (
          <div key={index} className="blog-entry">
            <h2>{entry.name}</h2>
            <img src={`data:image/png;base64,${entry.photo}`} alt="Blog Photo" />

            
            <p className="message">{entry.problemStatement}</p>

            <button  className="delete-button" onClick={()=>deleteit(entry.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Axios() {
  const [xyz,setXyz]=useState([])
useEffect(()=>{
axios.get('https://reqres.in/api/users?page=2')
.then(res=>setXyz(res.data.data))
.catch(err=>console.log(err));
},[])

  return (
    <div>Axios
      <hr></hr>
      {
        xyz.map((d,i)=>{
          return <p key={i}>{d.email}</p>
        })
      }
      <hr></hr>
    </div>
  )
}

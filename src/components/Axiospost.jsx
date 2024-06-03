import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Axios() {
  const [xyz,setXyz]=useState([])
useEffect(()=>{
axios.post('https://reqres.in/api/users',{
    "name":"akif",
    "job":"Deve"  
})
.then(res=>console.log(res))
.catch(err=>console.log(err));
},[])

  return (
    <div>Axios
      <hr></hr>
      xyz
      <hr></hr>
    </div>
  )
}

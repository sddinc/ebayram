import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Axios() {
  const [xyz,setXyz]=useState([])
useEffect(()=>{
  createUser();
/*
axios.post('https://reqres.in/api/users',{
    "name":"akif",
    "job":"Deve"  
})
.then(res=>console.log(res))
.catch(err=>console.log(err));
*/
},[])

const newUser=[{"name":"akif",
"job":"Deve"}]

const createUser=async(newUser)=>{
 const ress = axios.post('https://reqres.in/api/users',{"name":"akif",
 "job":"Deve"});
 console.log("reponse2",ress.data);
}

  return (
    <div>Axios
      <hr></hr>
      xyz
      <hr></hr>
    </div>
  )
}

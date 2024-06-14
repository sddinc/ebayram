import MyData from './MyData';
import {Link, Routes} from 'react-router-dom';
import React, { useState } from 'react';
export default function Form() {
const [form,setform]=useState({name:'',city:'',birthDate:''});
const handleChange=(event)=>{
    setform({...form,[event.target.name]:event.target.value})
    console.log(form)
}


  return (
    <div>
      <form> <p>user info</p> <hr></hr>
        <input type="text" name ="name" value={form.name} onChange={handleChange} placeholder='enter name'/>
      
        <select name="city" value={form.city} onChange={handleChange}>
            <option value="x">iasi</option>
            <option value="y">constanta</option>
        </select>
        <input type="date" value={form.birthDate} name ="birthDate" onChange={handleChange} placeholder='enter name'/>
        <Link to="./MyData"> <button>send</button></Link>
        <hr></hr>
      </form>
      <Routes>
  <Route path="/" element={<Dashboard />}>
      <Route path="./MyData" element={<MyData />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes>


    </div>
  )
}

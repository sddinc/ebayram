import { useState } from 'react'
//https://www.youtube.com/watch?v=42qFJ67E-ws
import Header from './components/Header'
import './App.css'
import { courses } from './components/Data'
import Course from './components/Course'
import Axios from './components/Axiosget'
import Quote from './components/Qoute'
import MyForm from './components/MyForm'


function App() {
  
  
  const myTheme="hero bilo";

  return (
    <div>
      <MyForm/>
      <Header/> 
      <Quote/>
      <Axios/>
     
      
      {
        courses?.map((course)=>(
          <Course key={course.id} course={course}/>

        ))
      }
    </div>
      
    
  )
}

export default App

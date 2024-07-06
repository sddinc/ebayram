import { useState } from 'react'
import {Link, Routes,Route} from 'react-router-dom';
//https://www.youtube.com/watch?v=42qFJ67E-ws
import Header from './components/Header'
import './App.css'

import ShowCourse from './components/ShowCourse'
import Currency from './components/Currency'
import Quote from './components/Qoute'
import MyForm from './components/MyForm'
import MyData from './components/MyData'
import NotFoundPage from './components/NotFoundPage'

function App() { 

  return (
    <div className='bodyContent'>  
      <Header/> 
        <Routes>
        <Route path="Qoute" element={<Quote/>}/>
        <Route path="MyData" element={<MyData />} /> 
        <Route path="MyForm" element={<MyForm/>} /> 
        <Route path="Currency" element={<Currency/>} /> 
        <Route path="ShowCourse" element={<ShowCourse/>} /> 
        <Route path="*" element={<NotFoundPage/>} /> 
        </Routes>
      
    </div>
      
    
  )
}

export default App

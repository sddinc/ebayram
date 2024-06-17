import React, { useContext } from 'react';
import {Link, Routes,Route} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
       
        <div className='title'>
udemy courses
        </div>
        <div>
          <Link to="./">Home</Link>
          <Link to="Qoute">Qoute</Link>
          <Link to="MyForm">MyForm</Link>
          <Link to="MyData">MyData</Link>
          <Link to="ShowCourse">Course</Link>
        </div>
    </div>
  )
}

export default Header
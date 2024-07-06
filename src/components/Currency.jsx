import React from 'react'
import './Currency.css'
import { HiArrowsRightLeft } from "react-icons/hi2";


export default function Money() {
  return (
    <div className='content-currency'>
      <div className='currencyHeader'>
        <h3>Exchange Currency</h3>
      </div>
      <div>
      <div className='currency-div'>
      <input type='number' className='amount'/>
      <select className='currency-options'>
        <option>usd</option>
        <option>try</option>
        <option>eur</option>
      </select>
      <HiArrowsRightLeft style={{fontSize:'25px', marginRight:'10px'}}/>
      <select className='currency-options'>
        <option>try</option>
        <option>usd</option>
        <option>eur</option>
      </select>
      <input type='number' className='currency_result'/>
    </div>

    <div>
      <button className='exchangeButton'> Corvert</button>
    </div>
      </div>

    </div>
    
  )
}

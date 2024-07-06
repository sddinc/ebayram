import React, { useState } from 'react'
import axios  from 'axios';

import './Currency.css'
import { HiArrowsRightLeft } from "react-icons/hi2";
let BASE_URL="https://api.freecurrencyapi.com/v1/latest";
let API_KEY="fca_live_NBbfCHyA3LPGU80ztGPfNJMs1UNDHSrekb91jbjC";
//let EXCHANGE_API=;

export default function Money() {

  const[amount, setAmount]=useState(0);
  const[result, setResult]=useState(0);
  const[fromCurrency, setFromCurrency]=useState('USD');
  const[toCurrency, setToCurrency]=useState('TRY');
// asenkron bir islem oldugu icin await ile bekletiyoruz.. istegin tamamlanmasini bekliyor.
  const exchange=async() =>{
    
    const response=await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
   
    setResult(((response.data.data[toCurrency])*amount).toFixed(2));
  }


  return (
    <div className='content-currency'>
      <div className='currencyHeader'>
        <h3>Exchange Currency</h3>
      </div>
      <div>
      <div className='currency-div'>
      <input
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      type='number' className='amount'/>
      <select onChange={(e)=>setFromCurrency(e.target.value)}
      className='currency-options'>
        <option>USD</option>
        <option>TRY</option>
        <option>EUR</option>
      </select>
      <HiArrowsRightLeft style={{fontSize:'25px', marginRight:'10px'}}/>
      <select 
      onChange={(e)=>setToCurrency(e.target.value)}
      className='currency-options'>
       <option>USD</option>
        <option>TRY</option>
        <option>EUR</option>
      </select>
      <input value={result} type='number' className='currency_result'/>
    </div>

    <div>
      <button onClick={exchange} className='exchangeButton'> Corvert</button>
    </div>
      </div>

    </div>
    
  )
}

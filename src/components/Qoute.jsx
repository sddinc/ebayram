import React, { useEffect, useState } from 'react'

export default function Quote() {
    const[num,setNum]=useState(0);
    const [question,setQuestion]=useState("");
    const getQuestion=()=>{
        fetch("https://type.fit/api/quotes")
        .then((res)=>res.json())
        .then((data)=>{
            setNum(num+1);
            setQuestion(data[num])
        })

    useEffect(()=>{
            setQuestion();
        },[])

    }
  return (
    <div>questions here... {question.text}
        <button onClick={getQuestion}>get next question</button>
    </div>
  )
}

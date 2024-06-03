import React from 'react'


function Course({course}) {
    const {id,title,descsriptions,price,link}=course;// object distracting

  return (
    <div >
        <h4>{title}</h4>
        <h5>{price}</h5>
        <h5>{descsriptions}</h5>
        <img src={link} width={120} height={90} />
        
    </div>
  )
}

export default Course
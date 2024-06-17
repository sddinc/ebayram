import React from 'react'
import Course from './Course'
//import { courses } from './components/Data'

export default function ShowCourse() {

  return (
    <div>
      {
        courses?.map((course)=>(
          <Course key={course.id} course={course}/>

        ))
      }


    </div>
  )
}

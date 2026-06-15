import React, { useState } from 'react'
import { StudentList } from './StudentList'


export const Student = () => {

  const [flag, setflag] = useState(true);

  const stopLoad=()=>
  {
    setflag(false);
  }
  const name="purva"
  var age=20
  var studenntObj={
    id:1,name:"jaladhi",rollno:7
  }
  var subjects=["Maths","Science","english"]
  const [sales, setsales] = useState(100)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Student</h1>
        <h1>flag in parent={flag==true?"loading..":"not loading"}</h1>
        <StudentList sales={sales} setsales={setsales} name={name} age={age} stu={studenntObj} subjects={subjects} flag={flag} stopLoad={stopLoad}></StudentList>
    </div>
  )
}

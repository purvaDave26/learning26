import React from 'react'
import { useParams } from 'react-router-dom';

export const StudentsResult = () => {
 const students = [
  { id: 1, name: "Ram", age: 23, subjects: [
    { subject: "maths", marks: 23 },
    { subject: "science", marks: 24 },
    { subject: "eng", marks: 24 },
    { subject: "hindi", marks: 20 }
  ]},
  { id: 2, name: "Shyam", age: 21, subjects: [
    { subject: "maths", marks: 45 },
    { subject: "science", marks: 40 },
    { subject: "eng", marks: 38 },
    { subject: "hindi", marks: 42 }
  ]},
  { id: 3, name: "Amit", age: 22, subjects: [
    { subject: "maths", marks: 30 },
    { subject: "science", marks: 35 },
    { subject: "eng", marks: 28 },
    { subject: "hindi", marks: 32 }
  ]},
  { id: 4, name: "Neha", age: 20, subjects: [
    { subject: "maths", marks: 50 },
    { subject: "science", marks: 48 },
    { subject: "eng", marks: 45 },
    { subject: "hindi", marks: 44 }
  ]},
  { id: 5, name: "Priya", age: 24, subjects: [
    { subject: "maths", marks: 41 },
    { subject: "science", marks: 39 },
    { subject: "eng", marks: 42 },
    { subject: "hindi", marks: 40 }
  ]},
  { id: 6, name: "Rohit", age: 23, subjects: [
    { subject: "maths", marks: 33 },
    { subject: "science", marks: 36 },
    { subject: "eng", marks: 30 },
    { subject: "hindi", marks: 34 }
  ]},
  { id: 7, name: "Anjali", age: 22, subjects: [
    { subject: "maths", marks: 47 },
    { subject: "science", marks: 49 },
    { subject: "eng", marks: 46 },
    { subject: "hindi", marks: 48 }
  ]},
  { id: 8, name: "Karan", age: 21, subjects: [
    { subject: "maths", marks: 28 },
    { subject: "science", marks: 25 },
    { subject: "eng", marks: 27 },
    { subject: "hindi", marks: 26 }
  ]},
  { id: 9, name: "Sneha", age: 20, subjects: [
    { subject: "maths", marks: 44 },
    { subject: "science", marks: 43 },
    { subject: "eng", marks: 41 },
    { subject: "hindi", marks: 42 }
  ]},
  { id: 10, name: "Vikas", age: 25, subjects: [
    { subject: "maths", marks: 35 },
    { subject: "science", marks: 37 },
    { subject: "eng", marks: 34 },
    { subject: "hindi", marks: 36 }
  ]}
];
    const id=useParams().id;
    const foundstudent=students.find((st)=>st.id==id)

    let total=0;
    for(let i=0;i<foundstudent.subjects.length;i++)
    {
      total+=foundstudent.subjects[i].marks
    }
    const percentage=total/foundstudent.subjects.length;

    let grade="";
    if(percentage>=40)
    {
      grade="A"
    }
    else if(percentage>=30)
    {
      grade="B"
    }
    else if(percentage>=20)
    {
      grade="C"
    }
    else
    {
      grade="D"
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Result</h1>
      <h2>Student name:{foundstudent.name}</h2>
      <h2>date:{new Date().toLocaleString()}</h2>
        {
          
            <table border="1" align='center'>          
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        foundstudent.subjects.map((found)=>
                        {
                          let finalgra="";
                          if(found.marks>=50)
                          {
                            finalgra="A";
                          }
                          else if(found.marks>=40)
                          {
                            finalgra="B"
                          }
                          else
                          {
                            finalgra="C"
                          }
                           return(
                          <tr>
                           <td> {found.subject}</td>
                           <td>{found.marks}</td>
                           <td>{finalgra}</td>
                          </tr>
                        )
                        })
                    }
                </tbody>
            </table>
        }
        <h2>total marks:{total}</h2>
        <h2>persentage:{percentage}%</h2>
        <h2>grade:{grade}</h2>
    </div>
  )
}

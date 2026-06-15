import React from 'react'
import { Link } from 'react-router-dom';

export const Students = () => {

    const students = [
  { id: 1, name: "Ram", age: 23 },
  { id: 2, name: "Shyam", age: 21 },
  { id: 3, name: "Amit", age: 22 },
  { id: 4, name: "Neha", age: 20 },
  { id: 5, name: "Priya", age: 24 },
  { id: 6, name: "Rohit", age: 23 },
  { id: 7, name: "Anjali", age: 22 },
  { id: 8, name: "Karan", age: 21 },
  { id: 9, name: "Sneha", age: 20 },
  { id: 10, name: "Vikas", age: 25 }
];
  return (
    <div style={{textAlign:"center"}}>
        {
             <table border="1" align='center'>
                <thead>
            <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>RESULT</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map((st) => (
              <tr>
                <td>{st.id}</td>
                <td>{st.name}</td>
                <td>{st.age}</td>
                <td>
                  <Link to={`/studentsresults/${st.id}`}>Result</Link>
                </td>
              </tr>
            ))
            }
           
                    </tbody>
                </table>
            
        }
    </div>
  )
}

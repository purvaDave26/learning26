import React from 'react'

export const MapDemo6 = () => {
    var employees = [
  {id:1, name:"Amit", dept:"IT", salary:75000, experience:5, rating:4.6, isActive:true, joiningDate:"2022-01-10"},
  {id:2, name:"Neha", dept:"HR", salary:45000, experience:2, rating:3.8, isActive:true, joiningDate:"2023-02-15"},
  {id:3, name:"Raj", dept:"Finance", salary:85000, experience:7, rating:4.7, isActive:true, joiningDate:"2021-03-01"},
  {id:4, name:"Simran", dept:"IT", salary:60000, experience:4, rating:4.2, isActive:false, joiningDate:"2022-05-20"},
  {id:5, name:"Karan", dept:"Marketing", salary:30000, experience:1, rating:3.5, isActive:true, joiningDate:"2024-01-12"},
  {id:6, name:"Priya", dept:"Finance", salary:95000, experience:8, rating:4.8, isActive:true, joiningDate:"2020-11-25"},
  {id:7, name:"Rohit", dept:"IT", salary:50000, experience:3, rating:4.0, isActive:false, joiningDate:"2023-07-10"},
  {id:8, name:"Anjali", dept:"HR", salary:40000, experience:2, rating:3.9, isActive:true, joiningDate:"2023-08-18"},
  {id:9, name:"Vikas", dept:"Marketing", salary:28000, experience:1, rating:3.2, isActive:true, joiningDate:"2024-02-05"},
  {id:10, name:"Sneha", dept:"IT", salary:72000, experience:6, rating:4.5, isActive:true, joiningDate:"2021-12-30"}
];
  return (
    <div style={{textAlign:"center"}}>
        <table class ="table table-dark">
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>DEPT</th>
                <th>SALARY</th>
                <th>EXPERIENCE</th>
                <th>RATING</th>
                <th>STATUS</th>
                <th>JOIN DATE</th>
            </thead>
            <tbody>
              {
                employees.map((emp)=>
              {
               return <tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.dept}</td>
                    <td style={{color:emp.salary>80000 ?"green":"red"}}>{emp.salary}</td>
                    <td>{emp.experience}{emp.experience<2? " freshers":" Experienced"}</td>
                    <td>{emp.rating}</td>
                    <td style={{opacity:emp.isActive==false ? 0.4:1}}>{emp.isActive ?"Active":"Not Active"}</td>
                    <td>{emp.joiningDate}</td>
                </tr>
              })
              }
            </tbody>
        </table>
    </div>
  )
}

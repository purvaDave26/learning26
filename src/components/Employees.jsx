import React, { useState } from 'react'

export const Employees = () => {
    const [employees,setEmployees]=useState([{id:1,name:"purva",age:20,salary:10000000},{id:2,name:"vidhi",age:21,salary:3000000},{id:3,name:"jaladhi",age:18,salary:800000},
        {id:4,name:"navya",age:14,salary:700000},{id:5,name:"dani",age:17,salary:900000}])

        const deleteEmployee=(id)=>
        {
           let updateEmp= employees.filter(employee=>employee.id!=id)
           setEmployees(updateEmp)
        }
  return (
    <div style={{textAlign:"center"}}>
            
       {
            employees.length==0 ? <h1>NO EMPLOYEES FOUND</h1>:
       <table border="1" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                 {
            employees.map((emp)=>
            {

                return<tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.age}</td>
                    <td>{emp.salary}</td>
                    <td><button onClick={()=>deleteEmployee(emp.id)}>Delete</button></td>
                </tr>
                
            })
        }
            </tbody>
       </table>
       }
       
    </div>
  )
}

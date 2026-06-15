import React from 'react'

export const MapDemo4 = () => {
    var students = [
    {
      id: 1,
      name: "Ram",
      age: 14,
      marks: 78,
      isActive: true,
      gender: "male",
      std: 9,
    },
    {
      id: 2,
      name: "Shyam",
      age: 15,
      marks: 85,
      isActive: true,
      gender: "male",
      std: 10,
    },
    {
      id: 3,
      name: "Sita",
      age: 14,
      marks: 92,
      isActive: true,
      gender: "female",
      std: 9,
    },
    {
      id: 4,
      name: "Gita",
      age: 16,
      marks: 88,
      isActive: false,
      gender: "female",
      std: 11,
    },
    {
      id: 5,
      name: "Aman",
      age: 15,
      marks: 67,
      isActive: true,
      gender: "male",
      std: 10,
    },
    {
      id: 6,
      name: "Riya",
      age: 14,
      marks: 74,
      isActive: true,
      gender: "female",
      std: 9,
    },
    {
      id: 7,
      name: "Karan",
      age: 16,
      marks: 81,
      isActive: false,
      gender: "male",
      std: 11,
    },
    {
      id: 8,
      name: "Priya",
      age: 15,
      marks: 90,
      isActive: true,
      gender: "female",
      std: 10,
    },
    {
      id: 9,
      name: "Arjun",
      age: 17,
      marks: 72,
      isActive: true,
      gender: "male",
      std: 12,
    },
    {
      id: 10,
      name: "Neha",
      age: 16,
      marks: 95,
      isActive: true,
      gender: "female",
      std: 11,
    },
  ];
  return (
    <div style={{textAlign:"center"}}>
        <table class="table table-dark">
        <thead>
            <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARKS</th>
            <th>STATUS</th>
            <th>GENDER</th>
            <th>STD</th>
            </tr>
        </thead>
        <tbody>
           {
            students.map((stu)=>
            {
                // return<tr>
                //     <td>{stu.id}</td>
                //     <td>{stu.name}</td>
                //     <td>{stu.age}</td>
                //     <td>{stu.marks}</td>
                //     <td>{stu.isActive =="true" ? "active":"not active"}</td>
                //     <td>{stu.gender}</td>
                //     <td>{stu.std}</td>
                //     </tr>

                return<tr style={{backgroundColor:stu.gender=="female" && "pink" }}>
                        <td>{stu.id}</td>
                        <td>{stu.name}</td>
                        {/* <td style={{color:"blue"}}>{stu.age}</td> */}
                        <td style={{color:stu.age==14 ? "blue":"white"}}>{stu.age}</td>
                        {/* <td style={{backgroundColor: stu.marks >80 ? "yellow":"gray"}}>{stu.marks}</td> */}
                        <td style={{backgroundColor:stu.marks>80 && "yellow"}}>{stu.marks}</td>
                        <td>{stu.isActive ==true?"Active":"Not Active"} {stu.isActive == true ?"✓":"✖"}</td>
                        <td>{stu.gender}</td>
                        <td style={{backgroundColor:stu.std == 12 && "red"}}>{stu.std}</td>
                    </tr>
            })
           }
        </tbody>
        </table>
    </div>
  )
}

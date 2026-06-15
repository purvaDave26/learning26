import React from 'react'

export const BookList = (props) => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>BookList</h1>
        <table border="1" align='center'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                 props.books.map((b)=>(
                    <tr>
                        <td>{b.id}</td>
                        <td>{b.name}</td>
                        <td><button onClick={()=>{props.deleteBook(b.id)}}>Delete</button></td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}

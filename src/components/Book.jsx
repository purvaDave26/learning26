import React, { useState } from 'react'
import { BookList } from './BookList';

export const Book = () => {
    
    const [book, setbook] = useState( [{ id: 1,name: "JavaScript"},{id: 2,name: "java"},{id: 3,name: "c++"},{id: 4,name: "c"},{id: 5,name: "Python"}])
    const deleteBook=(id)=>
    {
        const deletebook=book.filter(books=>books.id!=id)
        setbook(deletebook)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Book</h1>
        <BookList books={book} deleteBook={deleteBook}></BookList>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import booksObject from "../assets/books.json"
const Books = () => {
    console.log(booksObject);
    const bookKeys = Object.keys(booksObject)
    return(
        <>
        <h2>Books</h2>
        <div className="allBooks">
        {bookKeys.map(element => {
            return (
            <div className='bookSquare'>
            <h3>{element}</h3>
            <img className='bookImage' src={booksObject[element]["Image"]} />
            </div>
            )
        })}
        </div>
        </>
    )
}
export default Books;
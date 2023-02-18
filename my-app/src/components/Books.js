import React, { useState, useEffect } from 'react'
import BookTile from './BookTile';
import booksObject from "../assets/books.json"
const Books = () => {
    const bookKeys = Object.keys(booksObject)
    return(
        <>
        <h2>Books</h2>
        <div className="allBooks">
            
        {bookKeys.map(element => {
            return (
                <BookTile key={element} id={element} details={booksObject[element]}/>
            )
        })}
        </div>
        </>
    )
}
export default Books;
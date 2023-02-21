import React from 'react'
import { useParams } from 'react-router-dom'
import booksObject from "../assets/books.json"
const BookPage = () => {
    const { bookId } = useParams()
    const details = booksObject[bookId]
    return(
        <>
        <img className='bookImage' alt={"SF Masterworks cover"} src={details.Image} />
        <h2>{details.Title}</h2>
        <h3>{details.Author}</h3>
        <h4>{"⭐".repeat(details.Rating)} ({(details.Rating)}/10)</h4>
        <br/>
        <p>{details.Review}</p>
        <ul>
            {details.Themes.map((theme, id) => {
                return <li key={id}>{theme}</li>
            })}
        </ul>
        </>
    )
}
export default BookPage;
import React from 'react'
import { useParams } from 'react-router-dom'
import booksObject from "../assets/books.json"
const BookPage = () => {
    const { bookId } = useParams()
    const details = booksObject["Books"][bookId]
    return(
        <>
        <div className='bookPageDiv'>
            <div className='bookPageDetails'>
                <h2>{details.Title}</h2>
                <h3>{details.Author}</h3>
                <h4>{"⭐".repeat(details.Rating)} ({(details.Rating)}/10)</h4>
                <br/>
                <p>{details.Blurb}</p>
                <p>Tags: {details.Themes.join(", ")}</p>
                {/* <ul>
                    {details.Themes.map((theme, id) => {
                        return <li key={id}>{theme}</li>
                    })}
                </ul> */}
            </div>
            <div className='bookPageImageDiv'>
                <img className='bookPageImage' alt={"SF Masterworks cover"} src={details.Image} />
            </div>
        </div>

        <p className='bookPageQuote'>{details.Quote}</p>
        {Object.keys(details.Review).map((paragraphKey, id) => {
            return (
            <div key={id}>
                <p>{details.Review[paragraphKey]}</p>
            </div>
            )
        })}
        </>
    )
}
export default BookPage;
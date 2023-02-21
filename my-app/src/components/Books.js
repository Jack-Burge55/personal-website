import React, { useState } from 'react'
import BookTile from './BookTile';
import booksObject from "../assets/books.json"
const Books = () => {
    const [themeArray, setThemeArray] = useState([])
    const manageThemeArray = (value) => {
        if (themeArray.includes(value)) {
            setThemeArray(themeArray.filter(element => {
                return element !== value
            }))
        }
        else {
            setThemeArray(themeArray.concat([value]))
        }
    }

    const filterFunction = (themes) => {
        return themeArray.every(element => themes.includes(element))
    }
    const bookKeys = Object.keys(booksObject["Books"])
    const filteredBookKeys = bookKeys.filter(element => {
        return filterFunction(booksObject["Books"][element].Themes)
    })

    return(
        <>
        <h2>Books</h2>
        {booksObject.Themes.map((element, id) => {
            return (
                <div key={`div${id}`}>
                    <input type="checkbox" key={`input${id}`} id={`theme${id}`} name="vehicle1" value={element} onChange={(e) => {manageThemeArray(e.target.value)}}/>
                    <label  key={`label${id}`} htmlFor={`theme${id}`}>{element}</label>
                </div>
            )
        })}
        <div className="allBooks">
            
        {filteredBookKeys.map(element => {
            return (
                <BookTile key={element} id={element} details={booksObject["Books"][element]}/>
            )
        })}
        </div>
        </>
    )
}
export default Books;
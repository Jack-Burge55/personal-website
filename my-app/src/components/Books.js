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

    const bookKeys = Object.keys(booksObject)
    const filteredBookKeys = bookKeys.filter(element => {
        return filterFunction(booksObject[element].Themes)
    })
    
    return(
        <>
        <h2>Books</h2>
        <input type="checkbox" id="theme1" name="vehicle1" value="Plot Twist" onChange={(e) => {manageThemeArray(e.target.value)}}/>
        <label htmlFor="theme1">Plot Twist</label>
        <input type="checkbox" id="theme2" name="vehicle2" value="Set On Earth" onChange={(e) => {manageThemeArray(e.target.value)}}/>
        <label htmlFor="theme2">Set On Earth</label>
        <div className="allBooks">
            
        {filteredBookKeys.map(element => {
            return (
                <BookTile key={element} id={element} details={booksObject[element]}/>
            )
        })}
        </div>
        </>
    )
}
export default Books;
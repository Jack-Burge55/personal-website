import React, { useState } from 'react'
import BookTile from './BookTile';
import booksObject from "../assets/books.json"
const Books = () => {
    const [themeArray, setThemeArray] = useState([])
    const [sort, setSort] = useState("")

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

    const manageSortArray = (bookArray, sortValue) => {
        switch(sortValue) {
            case "AZ":
                bookArray.sort((a, b) => {
                    let fa = a.Title;
                    let fb = b.Title;
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });
              return bookArray;
            case "RatingHL":
                bookArray.sort((a, b) => {
                    return b.Rating - a.Rating
                });
              return bookArray;
              case "RatingLH":
                bookArray.sort((a, b) => {
                    return a.Rating - b.Rating
                });
              return bookArray;
            default:
                bookArray.sort((a, b) => {
                    return a.Id - b.Id
                });
              return bookArray;
          }
    }

    const filterTheme = (themes) => {
        return themeArray.every(element => themes.includes(element))
    }
    
    const bookArray = booksObject["Books"]
    const sortedBookArray = manageSortArray(bookArray, sort)
    const filteredBookArray = sortedBookArray.filter(element => {
        return filterTheme(element.Themes)
    })

    return(
        <>
        <h2>SF Masterworks Collection</h2>
        <label htmlFor="cars">Sort by: </label>
        <select name="bookSort" id="bookSort" onChange={(e) => {setSort(e.target.value)}}>
        <option value="Default">Default</option>  
        <option value="AZ">A-Z</option>
        <option value="RatingHL">{`Rating (Best first)`}</option>
        <option value="RatingLH">{`Rating (Worst first)`}</option>
        </select>
        {booksObject.Themes.map((element, id) => {
            return (
                <div key={`div${id}`}>
                    <input type="checkbox" key={`input${id}`} id={`theme${id}`} name="vehicle1" value={element} onChange={(e) => {manageThemeArray(e.target.value)}}/>
                    <label  key={`label${id}`} htmlFor={`theme${id}`}>{element}</label>
                </div>
            )
        })}
        <div className="allBooks">
            
        {filteredBookArray.map(element => {
            return (
                <BookTile key={element.Id} id={element.Id} details={element}/>
            )
        })}
        </div>
        </>
    )
}
export default Books;
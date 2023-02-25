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

    const manageSortArray = (keyArray, sortValue) => {
        const detailArray = keyArray.map(element => {
            return booksObject["Books"][element]
        })
        switch(sortValue) {
            case "AZ":
                console.log(detailArray);
                detailArray.sort((a, b) => {
                    let fa = a.Title.toLowerCase(),
                        fb = b.Title.toLowerCase();
                
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });
                console.log(detailArray);
                console.log(Object.keys(detailArray));
                console.log(keyArray);
              return keyArray;
            case "Rating":
                console.log("Rating");
              return keyArray;
            default:
              return keyArray;
          }
    }

    const filterTheme = (themes) => {
        return themeArray.every(element => themes.includes(element))
    }
    const bookKeys = Object.keys(booksObject["Books"])
    const sortedBookKeys = manageSortArray(bookKeys, sort)
    const filteredBookKeys = sortedBookKeys.filter(element => {
        return filterTheme(booksObject["Books"][element].Themes)
    })

    return(
        <>
        <h2>SF Masterworks Collection</h2>
        <label htmlFor="cars">Sort by: </label>
        <select name="bookSort" id="bookSort" onChange={(e) => {setSort(e.target.value)}}>
        <option value="Default">Default</option>  
        <option value="AZ">A-Z</option>
        <option value="Rating">Rating</option>
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
import React, { useState } from "react";
import BookTile from "./BookTile";
import booksObject from "../assets/books.json";
const Books = () => {
  const [themeArray, setThemeArray] = useState([] as theme[]);
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("");

  // const enum theme {plotTwist = "Plot Twist", setOnEarth = "Set On Earth", interestingAliens = "Interesting Aliens", goodWriting = "Good Writing", funToRead = "Fun to Read", realistic = "Realistic", modern = "Modern", compilation = "Compilation" }
  type theme = "Plot Twist" | "Set On Earth" | "Interesting Aliens" | "Good Writing" | "Fun to Read" | "Realistic" | "Modern" | "Compilation"
  // const enum sortOption { AZ = "AZ", HighLow = "RatingHL", LowHigh = "RatingLH", OldNew = "AgeON", NewOld = "AgeNO", None = "" }
  type sortOption = "AZ" | "RatingHL" | "RatingLH" | "AgeON" | "AgeNO" | "" 

  type Book = {
    Id: 0,
    Title: string,
    Author: string,
    Blurb: string,
    Quote: string,
    Rating: number,
    PublishDate: string,
    Review: string[]
    Image: string,
    Themes: theme[]
}

  const manageThemeArray = (value: theme) => {
    if (themeArray.includes(value)) {
      setThemeArray(
        themeArray.filter((element) => {
          return element !== value;
        })
      );
    } else {
      setThemeArray(themeArray.concat([value]));
    }
  };

  const manageSortArray = (bookArray: Book[], sortValue: sortOption) => {
    switch (sortValue) {
      case "AZ":
        bookArray.sort((a, b) => {
          return (a.Title < b.Title ? -1 : 1)
        });
        return bookArray;
      case "RatingHL":
        bookArray.sort((a, b) => {
          return b.Rating - a.Rating;
        });
        return bookArray;
      case "RatingLH":
        bookArray.sort((a, b) => {
          return a.Rating - b.Rating;
        });
        return bookArray;
      case "AgeON":
        bookArray.sort((a, b) => {
          return parseInt(a.PublishDate) - parseInt(b.PublishDate);
        });
        return bookArray;
      case "AgeNO":
        bookArray.sort((a, b) => {
          return parseInt(b.PublishDate) - parseInt(a.PublishDate);
        });
        return bookArray;
      default:
        bookArray.sort((a, b) => {
          return a.Id - b.Id;
        });
        return bookArray;
    }
  };

  const filterFunction = (themes: theme[], title: string, author: string) => {
    return (
      themeArray.every((element) => themes.includes(element)) &&
      (title.toLowerCase().includes(searchValue) ||
        author.toLowerCase().includes(searchValue))
    );
  };

  const bookArray = booksObject["Books"];
  const sortedBookArray = manageSortArray(bookArray as Book[], sort as sortOption);
  const filteredBookArray = sortedBookArray.filter((element) => {
    return filterFunction(element.Themes, element.Title, element.Author);
  });

  return (
    <>
      <h1 className="title">SF Masterworks Collection</h1>
      <div className="bookSelectors">
          <input
            className="input"
            id="bookSearch"
            placeholder="Title/Author"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <div className="select">
            <select
              name="bookSort"
              className="select"
              title="bookSort"
              id="bookSort"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="When Read">When read</option>
              <option value="AZ">A-Z</option>
              <option value="RatingHL">{`Rating (Best first)`}</option>
              <option value="RatingLH">{`Rating (Worst first)`}</option>
              <option value="AgeON">{`Date Published (Oldest first)`}</option>
              <option value="AGENO">{`Date Published (Newest first)`}</option>
            </select>
          </div>
        </div>
      <div className="themeSelectors">
        {booksObject.Themes.map((element, id) => {
          return (
            <div key={`div${id}`}>
              <input
                type="checkbox"
                key={`input${id}`}
                id={`theme${id}`}
                name="theme"
                value={element}
                onChange={(e) => {
                  manageThemeArray(e.target.value as theme);
                }}
              />
              <label key={`label${id}`} htmlFor={`theme${id}`}>
                {element}
              </label>
            </div>
          );
        })}
      </div>
      <div className="allBooks">
        {filteredBookArray.map((element) => {
          return (
            <BookTile key={element.Id} id={element.Id} details={element} />
          );
        })}
      </div>
    </>
  );
};
export default Books;

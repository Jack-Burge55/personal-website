import React from "react";
import { useParams } from "react-router-dom";
import booksObject from "../assets/books.json";
const BookPage = () => {
  const { bookId } = useParams();
  const [details] = booksObject["Books"].filter((element) => {
    return element.Id === parseInt(bookId);
  });
  return (
    <>
      <div className="bookPageDiv">
        <div className="bookPageDetails">
          <h2>{details.Title}</h2>
          <h3>{details.Author}</h3>
          <h4>
            {"⭐".repeat(details.Rating)} ({details.Rating}/10)
          </h4>
          <h5>First published in {details.PublishDate}</h5>
          <br />
          <p>{details.Blurb}</p>
          <p>Tags: {details.Themes.join(", ")}</p>
        </div>
        <div className="bookPageImageDiv">
          <img
            className="bookPageImage"
            alt={"SF Masterworks cover"}
            src={details.Image}
          />
        </div>
      </div>
      <hr className="solid"></hr>
      {details.Quote && <p className="bookPageQuote">“ {details.Quote} ”</p>}
      {details.Review.map((paragraph, id) => {
        return (
          <div key={id}>
            <p>{paragraph}</p>
          </div>
        );
      })}
    </>
  );
};
export default BookPage;

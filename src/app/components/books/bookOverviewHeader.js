import React from "react";
// ui
import Jumbotron from "react-bootstrap/Jumbotron";

const BookOverviewHeader = () => {
  return (
    <Jumbotron>
      <h1 className="text-center">Book Collection</h1>
      <div className="mt-4" />
      {/* <h4>
        This is your collection of books. Click on the item to display details.
      </h4> */}
      <div className="mt-4" />
      <h4>Notes:</h4>
      <p>Types of books: H for hardcover, P for paperback</p>
    </Jumbotron>
  );
};
export default BookOverviewHeader;

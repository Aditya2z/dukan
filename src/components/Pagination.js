import React, { useState } from "react";
import { extraIcons, ordersData } from "../dummy-data/dummyData";

function Pagination() { 
    const totalPages = ordersData.length / 20;
    let [currentPage, setCurrentPage] = useState(1);

  const handlePreviousBtn = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
    // May fetch data here accordingly
  };

  const handleNextBtn = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    // May fetch data here accordingly
  };

  const handlePageBtn = (page) => {
    setCurrentPage(Number(page));
    // May fetch data here accordingly
  };

  return (
    <div className="pagination flex justify-center align-center">
      <button
        type="button"
        className="button previous"
        onClick={handlePreviousBtn}
      >
        {extraIcons.leftArrow}
        &nbsp;&nbsp;
        Previous
      </button>
      {Array.from({ length: totalPages }, (anyVariable, index) => (
        <button
          key={index + 1}
          type="button"
          className={`button ${index + 1 === currentPage ? "active-page" : ""}`}
          onClick={(event) => {
            handlePageBtn(event.target.innerText);
          }}
        >
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        className="button next"
        onClick={handleNextBtn}
      >
        Next&nbsp;&nbsp;
        {extraIcons.rightArrow}
      </button>
    </div>
  );
}

export default Pagination;

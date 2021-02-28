import React, { useState } from "react";
import "./styles.css";

export const Pagination = ({
  currentPage,
  totalPage,
  nextPage,
  prevPage,
  isPrevious,
  isNext,
  goToPage,
  handlePageChange,
}) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className="pagination">
      <button
        onClick={() => {
          prevPage();
        }}
        disabled={!isPrevious}
      >
        Previous
      </button>
      <div className="page">
        {isEditable ? (
          <input
            type="number"
            value={currentPage}
            onChange={(e) => handlePageChange(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                goToPage();
                setIsEditable(false);
              }
            }}
          />
        ) : (
          <p
            onDoubleClick={() => setIsEditable(!isEditable)}
            title="Double Tapp to Jump Page"
          >
            {currentPage} of {totalPage} <br />{" "}
            <small>Double Tap to Edit</small>
          </p>
        )}
      </div>
      <button
        onClick={() => {
          nextPage();
        }}
        disabled={!isNext}
      >
        Next
      </button>
    </div>
  );
};

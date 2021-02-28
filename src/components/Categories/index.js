import React from "react";
import "./styles.css";
import { newsCategory } from "news";

export const Categories = ({ category, changeCategory }) => {
  return (
    <div className="categories">
      {newsCategory &&
        Object.keys(newsCategory).map((item) => {
          if (category === newsCategory[item]) {
            return (
              <button
                onClick={() => changeCategory(newsCategory[item])}
                className="btn-active"
              >{`#${newsCategory[item]}`}</button>
            );
          } else {
            return (
              <button
                onClick={() => changeCategory(newsCategory[item])}
              >{`#${newsCategory[item]}`}</button>
            );
          }
        })}
    </div>
  );
};

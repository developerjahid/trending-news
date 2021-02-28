import React from "react";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h3>Trending Headlines</h3>
      </header>
      {children}
    </div>
  );
};

import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-cover"></div>
        <div className="loader-cover loader-cover-back"></div>
      </div>
      <p>Loading books...</p>
    </div>
  );
};

export default Loader;

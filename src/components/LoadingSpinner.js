import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="loading__box">
        <span className="loading__item">&nbsp;</span>
        <span className="loading__item">&nbsp;</span>
        <span className="loading__item">&nbsp;</span>
        <span className="loading__item">&nbsp;</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;

import React from "react";
import "../css/home.css";

const FormContainer = ({ title, children, className = "" }) => (
  <div className={`form-container ${className}`}>
    <div className="form-top">
      <h2>{title}</h2>
    </div>
    <div className="form-content">
      {children}
    </div>
  </div>
);

export default FormContainer;

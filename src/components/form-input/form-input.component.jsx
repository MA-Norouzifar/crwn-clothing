import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...oterProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...oterProps}
      
    />
    {label ? (
      <lable
        className={`${oterProps.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </lable>
    ) : null}
  </div>
);

export default FormInput;
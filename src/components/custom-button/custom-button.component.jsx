import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...oterProps }) => (
  <button className="custom-button" {...oterProps}>
    {children}
  </button>
);

export default CustomButton;

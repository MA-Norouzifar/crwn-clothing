import React from "react";

//import "./custom-button.styles.scss";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  //const CustomButton = ({ children, isGoogleSignIn, inverted, ...oterProps }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
  // <button
  //   className={`${inverted ? "inverted" : ""} ${
  //     isGoogleSignIn ? "google-sign-in" : ""
  //   } custom-button`}
  //   {...oterProps}
  // >
  //   {children}
  // </button>
);

export default CustomButton;

import React from "react";
// Styles
import { ButtonNext } from "./Button.styles";

const Button = ({ text, callback }) => (
  <ButtonNext type="button" onClick={callback}>{text}</ButtonNext>
)

export default Button;

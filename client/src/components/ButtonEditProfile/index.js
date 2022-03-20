import React from "react";
// Styles
import { ButtonNext } from "./ButtonEP.styles";

const Button = ({ text, callback }) => (
  <ButtonNext type="button" onClick={callback}>{text}</ButtonNext>
)

export default Button;
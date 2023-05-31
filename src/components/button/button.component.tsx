import React from "react";
import { TButtonProps } from "./button.types";

const Button = ({ test = "red", ...props }: TButtonProps) => (
  <button style={{ backgroundColor: test }} {...props} />
);

export default Button;

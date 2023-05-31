import { ButtonHTMLAttributes } from "react";

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  test?: "red" | "blue";
};

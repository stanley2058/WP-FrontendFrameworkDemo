import React from "react";
import styles from "./Button.module.css";

/**
 * Button component
 * @param {{
 *      children: any,
 *      type?: "submit" | "reset" | "button",
 *      color?: "primary" | "secondary" | "warn" | "error",
 *      onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
 * }} props
 * @returns
 */
export default function Button(props) {
  const { children, type, color, onClick } = props;
  return (
    <button
      type={type ?? "button"}
      className={`${styles.btn} ${styles[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

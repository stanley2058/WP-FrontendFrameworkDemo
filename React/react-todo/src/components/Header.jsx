import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <nav className={styles.nav}>
        <h1>React Todo Demo</h1>
        <span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </span>
      </nav>
    </div>
  );
}

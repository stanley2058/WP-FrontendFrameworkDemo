import React, { useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const [name] = useState("<你的學號 + 姓名>");
  return (
    <div className={styles.div}>
      <main className={styles.main}>
        <h1>React Todo Demo</h1>
        <p>本專案使用 React 開發實作。</p>
        <p>
          你可以在
          <a
            href="https://zh-hant.reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            React 官網
          </a>
          找到更多資訊。
        </p>
        <p>
          React 有非常多的第三方開源套件可以使用，例如本專案使用了
          <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
            React Router
          </a>
          。
        </p>
        <p>開發者：{name}</p>
        <p>
          伺服器位置：
          <a href={window.location.origin}>{window.location.origin}</a>
        </p>
        <p>
          原始碼：
          <a
            href="https://github.com/stanley2058/WP-FrontendFrameworkDemo"
            target="_blank"
            rel="noreferrer"
          >
            WP-FrontendFrameworkDemo - Github
          </a>
        </p>
      </main>
    </div>
  );
}

import React from "react";
import styles from "./About.module.css";

export default function About() {
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
        <p>開發者：&lt;你的學號 + 姓名&gt;</p>
        <p>
          原始碼：
          <a
            href="https://github.com/stanley2058"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </main>
    </div>
  );
}

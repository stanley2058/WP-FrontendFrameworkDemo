# 三大前端框架範例

- [Angular Todo](./Angular/README.md)
- [React Todo](./React/README.md)
- [Vue Todo](./Vue/README.md)

## NPM

在開始之前要先熟悉 NPM。我們主要會用到的指令是 `npm install` 也可以縮寫成 `npm i`。如果要進行全域安裝，可以使用 `-g` flag 標示，例如：`npm install -g @angular/cli`

## 代辦事項清單程式 TodoApp

我們使用一個代辦事項清單的網頁服務作為範例，本應用服務會包含以下的功能：

1. 可以新增和刪除代辦事項
2. 可以顯示代辦事項清單
3. 可以把完成的代辦事項刪掉
4. 關掉網頁後代辦事項不會遺失，下次打開可以載入之前的清單

註：為了縮小所有範例間的差異，所有 CSS 的設定都是一致的。

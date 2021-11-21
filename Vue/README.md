# Vue 專案說明

> Vue 有提供兩種方式，可以透過 CDN 直接引入也可以透過 NPM 安裝。從 CDN 直接引入的方法會缺少一些功能，只建議在很簡單的應用服務上使用。

## 如何建立一個 Vue 專案 (NPM)

安裝 Vue CLI

```
npm install -g @vue/cli
```

建立專案

```
vue create vue-todo-npm
```

然後選擇 Vue2 的預設安裝即可。

```
Vue CLI v4.5.15
? Please pick a preset: (Use arrow keys)
❯ Default ([Vue 2] babel, eslint)
  Default (Vue 3) ([Vue 3] babel, eslint)
  Manually select features
```

再來安裝 Vue Router。

```
vue add router
```

一路 Yes 到底即可。

## 如何執行本範例

到專案目錄下面執行：

```
npm install
```

完成後再執行開發伺服器：

```
npm run serve
```

<template>
  <div>
    <main>
      <h1>Vue Todo Demo</h1>
      <p>本專案使用 Vue 2 開發實作。</p>
      <p>
        你可以在
        <a href="https://vuejs.org/" target="_blank">Vue 官網</a>
        找到更多資訊。
      </p>
      <p>開發者：{{ name }}</p>
      <p>
        伺服器位置：<a :href="origin">{{ origin }}</a>
      </p>
      <p>
        原始碼：<a
          href="https://github.com/stanley2058/WP-FrontendFrameworkDemo"
          target="_blank"
          >WP-FrontendFrameworkDemo - Github</a
        >
      </p>
    </main>
  </div>
</template>

<style scoped>
div {
  display: flex;
  place-items: center;
  justify-content: center;
}

main {
  margin-top: 3em;
  margin-bottom: 3em;
}
</style>

<script>
export default {
  name: "About",
  data() {
    return {
      origin: window.location.origin,
      name: "<你的學號 + 姓名>",
    };
  },
};
</script>

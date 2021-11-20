<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap");
body,
* {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans TC", sans-serif;
}
</style>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<template>
  <div id="app">
    <img width="25%" src="./assets/1200px-Vue.js_Logo_2.svg.png">
    <HelloWorld msg="Hello Vue in CodeSandbox!"/>
    <Dick/>
    <Extramodule/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Dick from "./components/Dick";
import Extramodule from "./components/Extramodule.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Dick,
    Extramodule
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue in CodeSandbox!"/>
    <Dick/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Dick from "./components/Dick";

export default {
  name: "App",
  components: {
    HelloWorld,
    Dick
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

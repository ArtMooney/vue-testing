import Vue from "vue";
import App from "./App.vue";

// Import stylesheets
import "./css/normalize.css";
import "./css/webflow.css";
import "./css/henriks-fresh-project.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

import Vue from "vue"; // Importamos do módulo vue o global view object
import App from "./App.vue";

// Aqui vem a view instance criada a partir doo global view object
new Vue({
  el: "#app",
  render: h => h(App)
});

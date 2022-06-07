import Vue from "vue"; // Importamos do módulo vue o global view object
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

// Aqui vem a view instance criada a partir doo global view object
new Vue({
  el: "#app", // é app é o id da div que está no index.html
  render: h => h(App)
});

// A sintaxe acima em ecamscrip 5:

/* new Vue({
  el: '#app',
  render: function(h) {
    h(App);
  }
}) */

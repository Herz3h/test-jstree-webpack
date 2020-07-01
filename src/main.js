import Vue from 'vue'
import App from './App.vue'
import 'jstree/src/jstree'
import 'jstree/src/jstree.dnd'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

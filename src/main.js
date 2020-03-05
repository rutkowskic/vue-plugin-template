import Vue from 'vue'
import App from './App.vue'
import MyPlugin from './MyPlugin/index'

Vue.config.productionTip = false

Vue.use(MyPlugin)

let myPlugin = new MyPlugin()

new Vue({
  render: h => h(App),
  myPlugin
}).$mount('#app')

import Vue from "vue"
import App from "./App.vue"

import axios from "axios"
import vueAxios from "vue-axios"
require("dotenv").config()

Vue.config.productionTip = false

Vue.use(vueAxios, axios)

new Vue({
  render: (h) => h(App),
}).$mount("#app")

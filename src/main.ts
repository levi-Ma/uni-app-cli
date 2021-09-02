import Vue from "vue"
import App from "./App.vue"
import Notify from "./wxcomponents/vant-weapp/notify/notify"

Vue.prototype.$notify = Notify
Vue.prototype.$api = {
  url: "https://www.baidu.com/",
}
Vue.config.productionTip = false

new App().$mount()

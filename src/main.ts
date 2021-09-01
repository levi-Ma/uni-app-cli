import Vue from "vue"
import App from "./App.vue"
import Notify from "./wxcomponents/vant-weapp/notify/notify"
// 类型声明
declare module "vue/types/vue" {
  interface Vue {
    $notify: any
    $api: any
  }
}

Vue.prototype.$notify = Notify
Vue.prototype.$api = {
  url: "https://www.baidu.com/",
}
Vue.config.productionTip = false

new App().$mount()

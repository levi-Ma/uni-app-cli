/*
 * @Author: leviymzh
 * @Date: 2021-09-01 14:33:22
 * @LastEditTime: 2021-09-01 16:22:26
 * @LastEditors: leviymzh
 * @Description: main.ts
 * @FilePath: /uni-app-cli/src/main.ts
 */
import Vue from "vue"
import App from "./App.vue"
import Notify from "./wxcomponents/vant-weapp/notify/notify"

Vue.config.productionTip = false
Vue.prototype.$notify = Notify

new App().$mount()

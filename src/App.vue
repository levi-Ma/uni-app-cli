<!--
 * @Author: leviymzh
 * @Date: 2021-09-01 14:33:22
 * @LastEditTime: 2021-09-01 16:21:27
 * @LastEditors: leviymzh
 * @Description: App.vue
 * @FilePath: /uni-app-cli/src/App.vue
-->
<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    console.log("App Launch")
  },
  onShow() {
    console.log("App Show")
  },
  onHide() {
    console.log("App Hide")
  },
})
</script>

<style>
/*每个页面公共css */
@import url("tailwindcss/tailwind.css");
@import "/wxcomponents/vant-weapp/common/index.wxss";
</style>

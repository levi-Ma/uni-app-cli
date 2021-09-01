<!--
 * @Author: leviymzh
 * @Date: 2021-09-01 14:33:22
 * @LastEditTime: 2021-09-01 17:50:10
 * @LastEditors: leviymzh
 * @Description: pages/index/index.vue
 * @FilePath: /uni-app-cli/src/pages/index/index.vue
-->
<template>
  <view class="content">
    <image
      class="logo"
      @click="handelTest(title)"
      src="../../static/logo.png"
    ></image>
    <view>
      <text class="text-red-600 title">{{ title }}</text>
    </view>
    <van-button type="info" @click="showNotify">弹出提示</van-button>
    <van-notify id="van-notify" />
  </view>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  data() {
    return {
      title: "Hello",
    }
  },
  onLoad() {},
  methods: {
    handelTest(val: string) {
      console.log(val)
    },
    showNotify() {
      this.$notify({ type: "danger", message: "通知内容" })
    },
  },
})
</script>

<style lang="scss">
.content {
  @apply flex flex-col items-center justify-center;

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx auto;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
  }
}
</style>

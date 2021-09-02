import Vue from "vue"
import { AjaxInstance } from "uni-ajax"
// 类型声明
declare module "vue/types/vue" {
  interface Vue {
    $notify: any
    $api: any
    $ajax: AjaxInstance
  }
}

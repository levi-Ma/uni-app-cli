/*
 * @Author: leviymzh
 * @Date: 2021-09-01 14:33:22
 * @LastEditTime: 2021-09-01 15:07:02
 * @LastEditors: leviymzh
 * @Description: postcss.config.js
 * @FilePath: /uni-app-cli/postcss.config.js
 */
const path = require('path')
module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')({
      resolve (id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
        }
        return id
      }
    }),
    require('tailwindcss'),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5'
    }),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
  ]
}

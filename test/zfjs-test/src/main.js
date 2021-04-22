import Vue from 'vue'
import App from './App.vue'
import VConsole from 'vconsole'

if (navigator.platform == "Win32") {
  import('@/mock/zfjs-mock-pc.js')
  import('@/mock/zfjs.js')
} else {
  new VConsole();
}

import '@/vendor/zfjs-sdk.js'
import '@/vendor/zfjs-test-sdk'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

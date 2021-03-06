// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/tailwind.css'
Vue.config.productionTip = false


import { VueReCaptcha } from 'vue-recaptcha-v3'
Vue.use(VueReCaptcha,{
  siteKey: '6LeiElwaAAAAAAhGQiYX_Vzi4yZn346g7NefXurI',
  loaderOptions: {
    useRecaptchaNet: true,
    explicitRenderParameters:{
      badge:'bottomleft',
      size:'invisible'
    }
  }
})


/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

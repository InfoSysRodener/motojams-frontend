// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//maps
import 'leaflet/dist/leaflet.css';


import '@/assets/css/tailwind.css'
Vue.config.productionTip = false

import VueFormulate from '@braid/vue-formulate'
Vue.use(VueFormulate,{
  classes: {
    outer: 'mb-4',
    input (context) {
      switch (context.classification) {
        case 'button':
          return 'my-2 p-2 lg:p-3 w-full font-sans rounded-sm text-white bg-gray-700 tracking-widest uppercase hover:bg-gray-900'
        case 'text' :
          return 'border border-gray-400 font-sans rounded p-2 lg:p-3 leading-none focus:border-black outline-none border-box w-full mb-1'
        case 'box':
          return 'flex justify-between'
        default:
          return ''
      }
    },
    label: 'font-medium text-sm mb-2',
    help: 'text-xs mb-1 text-gray-600',
    error: 'text-red-700 text-xs mb-1',
    decorator : ''
  }
});



import { VueReCaptcha } from 'vue-recaptcha-v3'
Vue.use(VueReCaptcha,{
  siteKey: '6LeiElwaAAAAAAhGQiYX_Vzi4yZn346g7NefXurI',
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: true,
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
  store,
  components: { App },
  template: '<App/>'
})

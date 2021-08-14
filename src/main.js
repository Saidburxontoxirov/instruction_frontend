import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
  position: 'top-right',
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: true,
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true
}

Vue.use(Toast, options)

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'
Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')

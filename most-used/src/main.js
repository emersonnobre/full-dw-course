import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.use(VueCompositionAPI)

const app = new Vue({
  vuetify,
  render: (h) => h(App)
})

app.$mount('#app')

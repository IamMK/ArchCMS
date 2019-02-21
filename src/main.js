import Vue from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import Firebase from 'firebase'
import {firebaseConfig} from './firebase'

import App from './App.vue'
import {router} from './router'
import store from './store'

Vue.config.productionTip = false

let app = ''

Vue.use(CKEditor)

Firebase.initializeApp(firebaseConfig)

Firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


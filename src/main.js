import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/firestore';
import VueTextareaAutosize from 'vue-textarea-autosize';

Vue.config.productionTip = false

  // Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC_K6j6Ofv1E1zc_kJw3qozYzEKr0ewPj0",
	authDomain: "vue-calendario-931e1.firebaseapp.com",
	databaseURL: "https://vue-calendario-931e1.firebaseio.com",
	projectId: "vue-calendario-931e1",
	storageBucket: "vue-calendario-931e1.appspot.com",
	messagingSenderId: "413642601018",
	appId: "1:413642601018:web:85b2d83dfd682770cb7b03"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

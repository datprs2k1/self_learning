require('./bootstrap');

window.Vue = require('vue').default;

import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

//Routes
import router from './router';
import Vue from 'vue';
import auth from './services/auth';
import role from './services/role';
import App from './App.vue';

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 */

Vue.component('app-header', require('./components/Header.vue').default);
Vue.component('app-footer', require('./components/Footer.vue').default);
Vue.component('admin-header', require('./components/AdminHeader.vue').default);
Vue.component('admin-footer', require('./components/AdminFooter.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    store,
    auth,
    role,
    render: h => h(App)
}).$mount('#app')

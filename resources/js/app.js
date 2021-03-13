/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//import { vue } from 'laravel-mix';
// window.Vue = require('vue').default;

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import store from './store'

Vue.component('counter-component', require('./components/CounterComponent.vue').default);
Vue.component('other-component', require('./components/OtherComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store: new Vuex.Store(store), //store: store,
});

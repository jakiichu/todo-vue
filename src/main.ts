import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "@/app/Router";
import {VueQueryPlugin} from "@tanstack/vue-query";

createApp(App).use(VueQueryPlugin).use(router).mount('#app')

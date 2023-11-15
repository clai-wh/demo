import { createApp } from 'vue';
import router from './router';
import '@/assets/fonts/font.css';
import '@/assets/css/common.css';
import App from './App.vue';

createApp(App).use(router).mount('#app');

// createApp用于创建应用实例
import {createApp} from 'vue'
import "@/style/reset.scss"
// 引入根组件
import App from './App.vue'
import router from "@/router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 引入全局组件
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from "@/components/hospital_bottom/index.vue"
// createApp创建应用实例
const app = createApp(App)
app.use(router);
app.use(ElementPlus);
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);
app.mount('#app');
// createApp用于创建应用实例
import {createApp} from 'vue'
import "@/style/reset.scss"
// 引入根组件
import App from './App.vue'
import router from "@/router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入elementPlus国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

// 引入全局组件
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from "@/components/hospital_bottom/index.vue"
import Login from "@/components/login/index.vue"
import {createPinia} from "pinia";

const pinia = createPinia();
// createApp创建应用实例
const app = createApp(App)
app.use(router);
app.use(pinia)
app.use(ElementPlus, {
    locale: zhCn,
});
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);
// 全局组件原来需要全局注册啊
app.component('Login', Login)
app.mount('#app');
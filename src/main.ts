import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
//DataV大屏可视化
// import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';

const app = createApp(App)
app.config.globalProperties.$http=axios;
app.use(createPinia())
app.use(router)


//DataV大屏可视化
// app.use(DataV, { classNamePrefix: 'dv-' });

app.mount('#app')

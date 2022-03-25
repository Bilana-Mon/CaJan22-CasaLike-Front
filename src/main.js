import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.scss'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import  VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)


app.use(router)
app.use(store)
app.use(ElementPlus)
app.component('Datepicker', Datepicker);
app.use(VueGoogleMaps, {
    load: {
        key: '',
    },
}).mount('#app')



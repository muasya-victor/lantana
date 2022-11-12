import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { generateClasses } from '@formkit/themes'

import '@element-plus/theme-chalk/dist/index.css'

import './assets/main.css'
import './assets/index.css'
import theme from "./theme.js";

const app = createApp(App)

app.use(router)
app.use(store)
app.use(plugin, defaultConfig( {
    config: {
        classes: generateClasses(theme),
    },
}),
)


app.mount('#app')

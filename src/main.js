import { createApp } from 'vue'
import App from './App.vue'
import eventBus from './eventBus'


const app = createApp(App);
app.config.productionTip = false
app.provide('eventBus', eventBus);
app.mount('#app')

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

window.onload = async () => {
  const el = document.querySelector('body')
  if (el) {
    el.insertAdjacentHTML('afterend', '<div id="crx-vite-app"></div>')
    const app = createApp(App)
    app.mount('#crx-vite-app')
  }
}

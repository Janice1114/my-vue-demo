import Vue from 'Vue';
import App from './app.vue';

const root = document.createElement('div')
document.body.appendChild(root)

const vm = new Vue({
  render (h) {
    return h(App)
  }
}).$mount(root);

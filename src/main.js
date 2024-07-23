import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import BoxFormulario from './components/BoxFormulario.vue';
import BoxResultado from './components/BoxResultado.vue';

const app = createApp(App);
app.component('BoxFormulario', BoxFormulario);
app.component('BoxResultado', BoxResultado);
app.mount('#app');

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

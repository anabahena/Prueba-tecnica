import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';
// import firestorePlugin from 'vuefire';
// Vue.use(firestorePlugin);

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyCTAXTMn0KkwQps-Gmph52l3wSa1c6DItA",
    authDomain: "pruebatecnica-cb09d.firebaseapp.com",
    databaseURL: "https://pruebatecnica-cb09d.firebaseio.com",
    projectId: "pruebatecnica-cb09d",
    storageBucket: "pruebatecnica-cb09d.appspot.com",
    messagingSenderId: "516277267324",
    appId: "1:516277267324:web:2f676b4b626934d47112f9",
    measurementId: "G-BEPKQ4FWHR"
};

export const app = firebase.initializeApp(firebaseConfig);
// Almacenamiento en la base de datos
export const db = app.database();
// Collección de base de datos(Actualización, edición y eliminación de datos)
export const answersRef = db.ref('answers')


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
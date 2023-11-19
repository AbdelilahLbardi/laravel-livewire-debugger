import Vue from 'vue';
import App from "./components/App.vue";

const div = document.createElement("div")
document.body.prepend(div);

new Vue({
    el: div,
    render: h => { return h(App); }
});
import Vue from "vue";
import AlertList from "./AlertList.vue";

const alert = new Vue(AlertList).$mount();

document.body.appendChild(alert.$el);

export default alert
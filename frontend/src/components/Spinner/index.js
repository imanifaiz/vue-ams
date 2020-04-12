import Vue from "vue";
import Spinner from "./Spinner";

const spinner = new Vue(Spinner).$mount();

document.body.appendChild(spinner.$el);

export default spinner;

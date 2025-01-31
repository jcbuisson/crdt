import { createApp } from "vue";
import Wrap from "./Wrap.vue";
import App from "./App.vue";

createApp(Wrap).component("app", App).mount("#app");
import { createApp } from "vue";
import "./assets/style/global.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

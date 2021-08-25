import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as dayjs from "dayjs";
import App from "./App.vue";
const app = createApp(App);
app.config.globalProperties.$day = dayjs;
app.use(ElementPlus).mount("#app");

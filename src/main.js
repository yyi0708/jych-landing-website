import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import i18n from "./locales/index.js"; // 确保路径正确
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

// 初始化 AOS
AOS.init({
  duration: 800, // 动画持续时间（毫秒）
  easing: "ease-in-out", // 动画效果
  once: true, // 是否只在滚动时触发一次动画
});

app.use(i18n).use(router);

app.mount("#app");

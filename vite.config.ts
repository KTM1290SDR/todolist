import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginElementPlus from "vite-plugin-element-plus";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 启动时清理缓存
    force: true,
  },
  resolve: {
    alias: {
      /*
      路径别名
      若为文件系统路径必须是绝对路径的形式，否则将以别名原样呈现，不会解析为文件系统路径路径 
    */
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    VitePluginElementPlus({
      // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
      // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus
      // 的文档注释
      useSource: true,
    }),
  ],
});

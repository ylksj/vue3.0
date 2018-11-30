const path = require('path');
const vConsolePlugin = require('vconsole-webpack-plugin'); // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
const CompressionPlugin = require('compression-webpack-plugin'); //Gzip
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //Webpack包文件分析器
const baseUrl = process.env.NODE_ENV === "production" ? "/static/" : "/"; //font scss资源路径 不同环境切换控制

module.exports = {
  //基本路径
  baseUrl: './',
  //输出文件目录
  outputDir: 'dist',
  //静态资源目录
  // assetsDir:'jjjjjj',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  //以多页模式构建应用程序。
  pages: undefined,
  //是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
  parallel: require('os').cpus().length > 1,
  //生产环境是否生成 sourceMap 文件，一般情况不建议打开
  productionSourceMap: false,
  // webpack配置
  configureWebpack: config => {
    //开发环境
    let pluginsDev = [
      //移动端模拟开发者工具(https://github.com/diamont1001/vconsole-webpack-plugin  https://github.com/Tencent/vConsole)
      new vConsolePlugin({
        filter: [], // 需要过滤的入口文件
        enable: true // 发布代码前记得改回 false
      }),
    ];
    if(process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
      // config.plugins = [...config.plugins, ...pluginsPro];
    } else {
      // 为开发环境修改配置...
      config.plugins = [...config.plugins, ...pluginsDev];
    }
  },
  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用css分离插件
    extract: false,
    // 开启 CSS source maps，一般不建议开启
    sourceMap: false,
  },
  // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
  devServer: {
    // 本地域名: 'localhost','127.0.0.0',真机测试域名:'0.0.0.0'
    host: "0.0.0.0",
    port: 8002, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
    hotOnly: false, // 热更新
    // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
    proxy: { //配置自动启动浏览器
      //配置跨域 
      "/rest/*": {
        target: "http://172.16.1.12:7071",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false
      },
      "/pbsevice/*": {
        target: "http://172.16.1.12:2018",
        changeOrigin: true,
        //ws: true,//websocket支持
        secure: false
      },
    }
  },

  // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  pluginOptions: {

  }
};

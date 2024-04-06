module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: "./docs",
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "/dev": {
        target: "http://127.0.0.1:8079",
        changeOrigin: true,
        pathRewrite: {
          "^/dev": "",
        },
      },
    },
  },
  productionSourceMap: false,
  pwa: {
    iconPaths: {
      favicon32: "favicon.png",
      favicon16: "favicon.png",
      appleTouchIcon: "favicon.png",
      maskIcon: "favicon.png",
      msTileImage: "favicon.png",
    },
  },
};

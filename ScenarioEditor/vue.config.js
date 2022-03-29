process.env.VUE_APP_VERSION = require("./package.json").version;
module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "VSG Research Project";
      return args;
    });
  },
  configureWebpack: {
    // plugins: [],
    devtool: "source-map",
  },
  devServer: {
    allowedHosts: [".gitpod.io", "localhost"],
  },
};

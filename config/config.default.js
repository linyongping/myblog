"use strict";

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1515377406234_884";

  // add your config here
  config.middleware = [];

  config.mongoose = {
    url: "mongodb://localhost:27017/my-blog",
    options: {}
  };

  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      enable: false
    }
  };

  return config;
};

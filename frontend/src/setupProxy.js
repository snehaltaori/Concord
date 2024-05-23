const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/tasks",
    createProxyMiddleware({
      target: "http://16.170.15.192:8080",
      changeOrigin: true,
    })
  );

  app.use(
    "/replies",
    createProxyMiddleware({
      target: "http://16.170.15.192:8080",
      changeOrigin: true,
    })
  );

  app.use(
    "/threads",
    createProxyMiddleware({
      target: "http://16.170.15.192:8080",
      changeOrigin: true,
    })
  );
};


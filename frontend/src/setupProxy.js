const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/tasks",
    createProxyMiddleware({
      target: "http://localhost:8085",
      changeOrigin: true,
    })
  );

  app.use(
    "/replies",
    createProxyMiddleware({
      target: "http://localhost:8085",
      changeOrigin: true,
    })
  );

  app.use(
    "/threads",
    createProxyMiddleware({
      target: "http://localhost:8085",
      changeOrigin: true,
    })
  );
};


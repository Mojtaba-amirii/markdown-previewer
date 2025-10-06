export function webpack(config, env) {
  return config;
}
export function devServer(configFunction) {
  return function (proxy, allowedHost) {
    const config = configFunction(proxy, allowedHost);

    // Handle webpack-dev-server v5 compatibility
    // Convert old API to new API
    // 1. Handle onBeforeSetupMiddleware and onAfterSetupMiddleware
    if (config.onBeforeSetupMiddleware || config.onAfterSetupMiddleware) {
      const beforeSetup = config.onBeforeSetupMiddleware;
      const afterSetup = config.onAfterSetupMiddleware;

      delete config.onBeforeSetupMiddleware;
      delete config.onAfterSetupMiddleware;

      config.setupMiddlewares = (middlewares, devServer) => {
        if (beforeSetup) {
          beforeSetup(devServer);
        }

        if (afterSetup) {
          afterSetup(devServer);
        }

        return middlewares;
      };
    }

    // 2. Handle https -> server migration
    if (config.https !== undefined) {
      config.server = {
        type: config.https ? "https" : "http",
      };
      delete config.https;
    }

    return config;
  };
}
export function jest(config) {
  config.transformIgnorePatterns = ["node_modules/(?!(marked)/)"];

  config.moduleNameMapper = {
    ...config.moduleNameMapper,
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  };

  return config;
}

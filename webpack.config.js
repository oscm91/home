const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    mode: "development",
    optimization: {
      ...config.optimization,
      runtimeChunk: false
    },
    output: {
      ...config.output,
      scriptType: "text/javascript"
    },
    module: {
      ...config.module,
    },
    plugins: [...config.plugins],
  };
};

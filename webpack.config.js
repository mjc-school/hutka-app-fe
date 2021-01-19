const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    { ...env, offline: true },
    argv
  );
  // Customize the config before returning it.

  if (config.mode === 'development') {
    config.devServer.proxy = {
      '/api/**': {
        target: {
          host: 'hutkaapp.com',
          protocol: 'https:',
          port: 443,
        },
        secure: false,
        changeOrigin: true,
        logLevel: 'info',
      },
    };
  }
  // console.log(JSON.stringify(env, null, 2));
  // console.log(process.cwd());

  config.resolve.alias = { ...config.resolve.alias,
    // TODO: Findout how to resolve this freaking shitty thing
    // 'react-native-maps': '~/work/hutka-app-fe/packages/react-native-web-maps/',
    'react-native-maps': 'react-native-web-maps',
  }
  return config;
};

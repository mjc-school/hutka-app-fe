const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({...env, offline: true}, argv);
  // Customize the config before returning it.

  config.resolve.alias = { ...config.resolve.alias,
    'react-native-maps': 'react-native-web-maps',
  }
  console.log(config.resolve);
  return config;
};
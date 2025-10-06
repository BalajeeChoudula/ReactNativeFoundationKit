const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    resolver: {
        alias: {
            'redux-saga':'redux-saga/lib'
        },
        unstable_enablePackageExports:false,
        unstable_enableSymlinks:false
    }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

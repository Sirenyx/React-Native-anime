module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@app': './src/app',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@screens': './src/app/screens',
          '@services': './src/services',
          '@contexts': './src/contexts',
        },
      },
    ],
  ],
};

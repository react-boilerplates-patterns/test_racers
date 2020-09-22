module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          hooks: './src/hooks',
          'redux-store': './src/redux-store/index.js',
          thunks: './src/redux-store/root-thunks.js',
          routes: './src/routes/index.js',
          helpers: './src/helpers/index.js',
          services: './src/services/index.js',
          'project-constants': './src/constants/index.js',
          screens: './src/screens',
          components: './src/components',
        },
      },
    ],
  ],
};

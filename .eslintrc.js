module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _navigations: './src/navigations',
          _scenes: './src/scenes',
          _services: './src/services',
          _store: './src/store',
          _actions: './src/store/actions',
          _reducers: './src/store/reducers',
          _styles: './src/styles',
          _theme: './src/theme',
          _utils: './src/utils',
        },
      },
    },
  },
};

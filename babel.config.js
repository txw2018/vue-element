
const plugins = [
  ['component',
    {
      'libraryName': 'element-ui',
      'styleLibraryName': 'theme-chalk'
    }
  ]
]
if (process.env.VUE_APP_LOCAL === 'production') {
  plugins.unshift([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}
module.exports = {
  presets: [
    '@vue/app',
    ['@babel/preset-env', { 'modules': false }]
  ],
  plugins: plugins
}

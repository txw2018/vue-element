const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  pages: {
    index: {
      // page 的入口
      entry: './src/index/main.js',
      // 模板来源
      template: './src/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  outputDir: '',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('~views', path.join(__dirname, 'src/views'))
      .set('~styles', path.join(__dirname, 'src/config/styles'))
      .set('~utils', path.join(__dirname, 'src/utils'))
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(path.join(__dirname, './src/assets/icon'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    let externals = {
      vue: 'vue',
      axios: 'axios',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      vuex: 'Vuex'
    }
    config.externals(externals)
    const cdn = {
      css: [
        // element-ui
        '//unpkg.com/element-ui/lib/theme-chalk/index.css'
      ],
      js: [
        // vue
        '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js',
        // vue-router
        '//unpkg.com/vue-router@2.0.0/dist/vue-router.js',
        // vuex
        '//cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js',
        // axios
        '//unpkg.com/axios/dist/axios.min.js',
        // element-ui js
        '//unpkg.com/element-ui/lib/index.js'
      ]
    }
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~styles/var.scss";
        `
      }
    }
  }
}

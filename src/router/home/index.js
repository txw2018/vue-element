export default [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "news" */ '~views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'home',
      index: 0
    }
  }
]

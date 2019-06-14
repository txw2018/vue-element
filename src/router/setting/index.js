export default [
  {
    path: '/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "news" */ '~views/setting/main.vue'),
    children: [
      {
        path: '/setting/theme',
        name: 'theme',
        component: () => import(/* webpackChunkName: "news" */ '~views/setting/theme/index.vue')
      }
    ]
  }
]

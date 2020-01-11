export default [
  {
    path: '/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "news" */ '~views/setting/main.vue'),
    meta: {
      title: '系统设置',
      icon: 'setting',
      index: 2
    },
    children: [
      {
        path: '/setting/theme',
        name: 'theme',
        component: () => import(/* webpackChunkName: "news" */ '~views/setting/theme/index.vue'),
        meta: {
          title: '主题设置',
          icon: 'edit-square'
        }
      }
    ]
  }
]

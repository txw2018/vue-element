export default [
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "components" */ '~views/components/main.vue'),
    children: [
      {
        path: '/components/draggable',
        name: 'draggable',
        component: () => import(/* webpackChunkName: "draggable" */ '~views/components/draggable/index.vue')
      },
      {
        path: '/components/codepen',
        name: 'codepen',
        component: () => import(/* webpackChunkName: "codepen" */ '~views/components/codepen/index.vue')
      },
      {
        path: '/components/global-comp',
        name: 'global-comp',
        component: () => import(/* webpackChunkName: "global-comp" */ '~views/components/global-comp/index.vue')
      },
      {
        path: '/components/show-table',
        name: 'show-table',
        component: () => import(/* webpackChunkName: "show-table" */ '~views/components/show-table/index.vue')
      }
    ]
  }
]

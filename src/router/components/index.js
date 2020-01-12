export default [
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "components" */ '~views/components/main.vue'),
    meta: {
      title: '组件',
      icon: 'component',
      index: 1
    },
    children: [
      {
        path: '/components/draggable',
        name: 'draggable',
        component: () => import(/* webpackChunkName: "draggable" */ '~views/components/draggable/index.vue'),
        meta: {
          title: '拖拽',
          icon: 'draggable'
        }
      },
      {
        path: '/components/codepen',
        name: 'codepen',
        component: () => import(/* webpackChunkName: "codepen" */ '~views/components/codepen/index.vue'),
        meta: {
          title: 'codepen编辑器',
          icon: 'bianji'
        }
      },
      {
        path: '/components/global-comp',
        name: 'global-comp',
        component: () => import(/* webpackChunkName: "global-comp" */ '~views/components/global-comp/index.vue'),
        meta: {
          title: '全局组件',
          icon: 'global'
        }
      },
      {
        path: '/components/show-table',
        name: 'show-table',
        component: () => import(/* webpackChunkName: "show-table" */ '~views/components/show-table/index.vue'),
        meta: {
          title: '展示table',
          icon: 'global'
        }
      }
    ]
  }
]

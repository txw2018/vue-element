export default [
  {
    name: '首页',
    path: '/',
    icon: 'home'
  },
  {
    name: '系统设置',
    path: '/setting',
    icon: 'setting',
    children: [
      {
        name: '主题设置',
        path: '/setting/theme',
        icon: 'edit-square'
      }
    ]
  },
  {
    name: '组件功能',
    path: '/components',
    icon: 'component',
    children: [
      {
        name: '拖拽',
        path: '/components/draggable',
        icon: 'draggable'
      },
      {
        name: 'codepen编辑器',
        path: '/components/codepen',
        icon: 'bianji'
      },
      {
        name: '展示全局组件',
        path: '/components/global-comp',
        icon: 'global'
      },
      {
        name: 'show-table',
        path: '/components/show-table',
        icon: 'global'
      }
    ]
  }
]

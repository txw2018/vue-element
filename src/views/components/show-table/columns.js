export default [
  {
    type: 'selection'
  },
  {
    prop: 'date',
    label: '日期',
    checked: true
  },
  {
    prop: 'name',
    label: '名字',
    checked: true

  },
  {
    prop: 'province',
    label: '省',
    checked: true
  },
  {
    prop: 'address',
    label: '地址',
    checked: true
  },
  {
    prop: 'zip',
    label: '大小',
    checked: true

  },
  {
    type: 'operate',
    fixed: 'right',
    operates: [
      { name: '修改' },
      { name: '删除' }
    ]
  }
]

let column = [
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
    checked: true,
    sortable: true
  },
  {
    type: 'operate',
    label: '操作',
    fixed: 'right',
    operates: [
      { name: '修改' },
      { name: '删除' }
    ],
    slotHeader: 'operate-header'
  }
]
const _column = JSON.parse(localStorage.getItem('columns'))
if (_column) {
  column = _column
}

export default column

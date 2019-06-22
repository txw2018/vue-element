<!--  使用table全局组件 -->
<template>
  <el-card>
   <xx-table
    ref="table"
    :tableData="tableData"
    :columns="columns"
    :drawer="true"
    drawerTitle="选择要显示的字段"
   >
    <!-- 操作栏头部 -->
    <template slot="operate-header">
      <xx-svg-icon @click.native.prevent="handleMenuTableClick" class-name="pointer menu-table" icon-class="menu-table"></xx-svg-icon>
    </template>
    <div class="flex-column" slot="drawer">
          <div class="drawer-body">
            <draggable v-model="columns">
                <div
                  v-for="(item, index) in columns"
                  :key="index"
                >
                  <div class="drawer-item"
                    v-if="item.prop">
                    <div class="drawer-item-checkbox">
                      <el-checkbox v-model="item.checked">{{item.label}}</el-checkbox>
                    </div>
                    <xx-svg-icon icon-class="move"></xx-svg-icon>
                  </div>
                </div>
            </draggable>
          </div>
          <div class="drawer-footer">
            <el-row>
              <el-col :span="12">
                <el-button @click="closeDrawer">关闭</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
   </xx-table>
  </el-card>
</template>

<script>
import columns from './columns'
import draggable from 'vuedraggable'
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ],
      columns: columns
    }
  },

  components: {
    draggable
  },

  computed: {},

  mounted () {
    console.log(columns)
  },

  methods: {
    /**
     * @description 打开抽屉
     */
    handleMenuTableClick () {
      this.$refs.table.openDrawer()
    },
    /**
     * @description 关闭抽屉
     */
    closeDrawer () {
      this.$refs.table.closeDrawer()
    }
  },
  watch: {
    columns: {
      deep: true,
      async handler () {
        localStorage.setItem('columns', JSON.stringify(this.columns))
      }
    }
  }
}

</script>
<style lang='scss' scoped>
.menu-table{
  width: 22px;
  height: 22px;
}
.flex-column {
  display: flex;
  flex-direction:column;
  flex-wrap: nowrap;
  flex: 1;
}

 .drawer-body {
    flex: 1;
    overflow-y: auto;
    .drawer-item {
      padding-left: 40px;
      line-height: 30px;
      margin: 5px 0;
      flex: 1;
      display: flex;
      flex-direction:row;
      flex-wrap: nowrap;
      align-items: center;
      overflow: auto;
      &:hover, &:active {
        background: #E5EDFB;
        svg {
          display: inline-block;
        }
      }
      &-checkbox {
        flex: 1;
      }
      svg {
        margin-right: 25px;
        display: none;
      }
    }
  }
</style>

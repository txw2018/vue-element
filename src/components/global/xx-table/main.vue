<template>
  <el-row ref="tableWrapper" :class="`xx-table-${_uid}`">
    <el-col class="xx-table-wrapper" :span="24">
      <el-table
        :data="tableData"
        v-bind="$attrs"
        v-on="$listeners"
        :height="height"
        style="width: 100%"
        >
        <template  v-for="(column,index) in columns">
          <!-- 多选框 -->
          <el-table-column
            :key="index"
            v-if="column.type==='selection'"
            type="selection"
            width="150">
          </el-table-column>
          <!-- 序号 -->
          <el-table-column
            :key="index"
            v-if="column.type==='index'"
            type="index"
            width="50">
          </el-table-column>
          <!-- 具体内容 -->
          <el-table-column
            :key="index"
            v-if="column.checked"
            :show-overflow-tooltip="true"
            :align="algin"
            :prop="column.prop"
            :label="column.label"
            :width="column.width || ''">
            <template slot-scope="scope">
              <!-- 自定义表头 -->
              <template v-if="column.slotHeader" slot="header">
                  <slot :name="column.slotHeader"></slot>
                </template>
              <!-- 如果slot有值的时候 那么当前格可以不显示，可以选择显示自定义的slot-->
              <label v-if="!column.slot">
                <span>
                  {{scope.row[columns[index].prop]}}
                </span>
              </label>
              <!-- 使用slot的情况下 -->
              <label v-if="column.slot">
                <!-- 具名slot -->
                <slot v-if="column.slot" :name="column.slot" :scope="scope"></slot>
              </label>
            </template>
          </el-table-column>
          <!-- 操作 -->
          <el-table-column
            v-else-if="column.type === 'operate'"
            :fixed="column.fixed ? column.fixed : false"
            :key="index"
            :label="column.label"
            width="120">
            <template v-if="column.slotHeader" slot="header">
              <slot :name="column.slotHeader"></slot>
            </template>
            <template slot-scope="scope">
              <el-button
                v-for="(operate,index) in column.operates"
                :key="index"
                @click="handleOperateClick(operate, scope.row)"
                type="text"
                size="small">
                {{operate.name}}
              </el-button>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <xx-drawer v-if="drawer" class="drawer-wrapper" v-model="drawerVisible" :title="drawerTitle">
      <div v-if="$slots.title" slot="title"></div>
      <slot name="drawer">

      </slot>
    </xx-drawer>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'xx-table',
  props: {
    /**
     * @description 表格数据
     */
    tableData: {
      type: Array,
      defaul: () => []
    },
    /**
     * @description 表头数据
     */
    columns: {
      type: Array,
      defaul: () => []
    },
    height: {
      type: String,
      default: '75vh'

    },
    /**
     * @description 对齐方式 left/center/right
     */
    algin: {
      type: String,
      default: 'left'
    },
    /**
     * @description 是否显示抽屉
     */
    drawer: {
      type: Boolean,
      default: false
    },
    /**
     * @description 抽屉标题
     */
    drawerTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      /**
       * @description 是否打开抽屉
       */
      drawerVisible: false

    }
  },
  methods: {
    /**
     * @description 打开抽屉
     */
    openDrawer () {
      this.drawerVisible = true
    },
    /**
     * @description 关闭抽屉
     */
    closeDrawer () {
      this.drawerVisible = false
    },
    handleOperateClick (item, row) {
      console.log(item)
      this.$emit('operate-click', item.emitKey, row)
    }

  },

  created () {
    console.log(this.columns)
  }
}
</script>
<style lang="scss" scoped>
.xx-table-wrapper {
  position: relative;
  .drawer-wrapper {
    display: flex;
    flex-direction:column;
    flex-wrap: nowrap;
  }
  .el-table, .el-table__header-wrapper, .el-table__fixed-header-wrapper{
    th,.gutter, .el-table__fixed-right-patch {
      background: rgba(238, 238, 238, 1);
      color: rgba(51, 51, 51, 1);
    }
  }
  .el-table__footer-wrapper tbody td{
      background: rgba(238, 238, 238, 1);
      color: rgba(51, 51, 51, 1);
  }
  .el-table__body-wrapper {
    &::-webkit-scrollbar {width: 8px;  background-color:transparent;} /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    &::-webkit-scrollbar-track {background-color: #f0f6ff;  } /*定义滚动条轨道 内阴影+圆角*/
    &::-webkit-scrollbar-thumb {background-color: #eee; border-radius:6px;} /*定义滑块 内阴影+圆角*/
    &:hover {
      &::-webkit-scrollbar{
        display: block;
      }
    }
  }
}
</style>

<template>
  <el-table
    :data="tableData"
    v-bind="$attrs"
    v-on="$listeners"
    style="width: 100%"
    max-height="250">
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
        v-if="column.type==='index'"
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
    /**
     * @description 对齐方式 left/center/right
     */
    algin: {
      type: String,
      default: 'left'
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  },
  data () {
    return {

    }
  }
}
</script>

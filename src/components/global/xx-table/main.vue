<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="250">
    <el-table-column v-for="(column,index) in columns" :key="index"
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
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
      default () {
        return []
      }
    },
    /**
     * @description 表头数据
     */
    columns: {
      type: Array,
      default () {
        return []
      }
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

<template>
  <div class="fluid container">
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sortable control</h3>
      </div>
      <div class="panel-body">
        <div class="checkbox">
          <label><input type="checkbox" v-model="editable">Enable drag and drop</label>
        </div>
        <button type="button" class="btn btn-default" @click="orderList">Sort by original order</button>
      </div>
    </div>
    <el-row class="list" :gutter="20">
      <el-col  :span="6">
        <draggable class="list-group" tag="ul" v-model="list" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
          <transition-group type="transition" :name="'flip-list'">
            <li class="list-group-item" v-for="element in list" :key="element.order">
               <xx-svg-icon  :iconClass="element.fixed? 'fixed':'drag'" @click.native="element.fixed=! element.fixed"></xx-svg-icon>
              {{element.name}}
              <span class="badge">{{element.order}}</span>
            </li>
          </transition-group>
        </draggable>
      </el-col>
      <el-col :span="6">
        <draggable element="span" v-model="list2" v-bind="dragOptions" :move="onMove">
          <transition-group name="no" class="list-group" tag="ul">
            <li class="list-group-item" v-for="element in list2" :key="element.order">
               <xx-svg-icon  :iconClass="element.fixed? 'fixed':'drag'" @click.native="element.fixed=! element.fixed"></xx-svg-icon>
              {{element.name}}
              <span class="badge">{{element.order}}</span>
            </li>
          </transition-group>
        </draggable>
      </el-col>
      <el-col :span="6">
          <pre>{{listString}}</pre>
      </el-col>
      <el-col :span="6">
         <pre>{{list2String}}</pre>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const message = [
  'vue.draggable',
  'draggable',
  'component',
  'for',
  'vue.js 2.0',
  'based',
  'on',
  'Sortablejs'
]

export default {
  name: 'hello',
  components: {
    draggable
  },
  data () {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
    orderList () {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order
      })
    },
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString () {
      return JSON.stringify(this.list, null, 2)
    },
    list2String () {
      return JSON.stringify(this.list2, null, 2)
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.list{
  margin-top: 30px;
  &-group{
    font-size: 14px;
    &-item{
      text-align: left;
      position: relative;
      display: block;
      padding: 10px 15px;
      margin-bottom: -1px;
      background-color: #fff;
      border: 1px solid #ddd;
      box-sizing: border-box;
      .badge {
        float: right;
        min-width: 10px;
        padding: 3px 7px;
        font-size: 12px;
        font-weight: bold;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        background-color: #777;
        border-radius: 10px;
        }
      &:first-child{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
       }
      &:last-child{
        margin-bottom: 0;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
       }
      }
  }
}
pre{
  text-align: left;
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>

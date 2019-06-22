<!-- 抽屉组件 -->
<template>
  <transition name="drawer-animation">
    <div v-click-outside="onClickOutside" class="cc-drawer" v-if="value"
      :style="{
        width: drawerWidth,
        height
      }"
    >
      <div class="cc-drawer__title" v-if="title && !$slots.title">{{title}}</div>
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import Vue from 'vue'
import * as vClickOutside from 'v-click-outside-x'
Vue.use(vClickOutside)
export default {
  name: 'xx-drawer',
  props: {
    /**
     * @description 抽屉是否显示，可使用 v-model 双向绑定数据
     */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * @description 抽屉标题。如果使用的 slot 自定义了页头，则 title 无效
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * @description 抽屉宽度。当其值不大于 100 时以百分比显示，大于 100 时为像素
     */
    width: {
      type: Number,
      default: 260
    },
    /**
     * @description 抽屉高度
     */
    height: {
      type: String,
      default: '100%'
    },
    /**
     * @description 是否允许点击其它区域关闭
     */
    maskClosable: {
      default: true
    }
  },
  computed: {
    drawerWidth () {
      if (this.width > 100) {
        return `${this.width}px`
      }
      return `${this.width}%`
    }
  },
  data () {
    return {
      useMaskCloseable: false
    }
  },
  methods: {
    onClickOutside () {
      if (this.value) {
        if (this.maskClosable && this.useMaskCloseable) {
          this.$emit('input', false)
        }
      }
    }
  },
  watch: {
    value () {
      if (this.value) {
        setTimeout(() => {
          this.useMaskCloseable = true
        }, 100)
      } else {
        this.useMaskCloseable = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cc-drawer {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  height: 670px;
  background: #fff;
  z-index: 10;
  box-shadow: 0 0 2px 2px rgba(212, 211, 211, 0.4);
  transition: all .5s ease;
  overflow-y: auto;
  &__title {
    font-size: 16px;
    color: #333;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #E5E5E5;
  }
}
.drawer-animation-enter, .drawer-animation-leave-to{
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}
.drawer-animation-enter-to, .drawer-animation-leave{
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
</style>

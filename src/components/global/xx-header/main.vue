<!-- 头部 -->
<template>
  <div class="header">
      <div class="left">
        <xx-svg-icon iconClass='indent' @click.native="changeMenus"></xx-svg-icon>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item,index) in levelList" :key="index">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="right"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'xx-header',
  data () {
    return {
      levelList: null
    }
  },

  components: {},

  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },

  computed: {
    ...mapGetters(['getIsCollapse'])
  },

  mounted () {
    this.getBreadcrumb()
  },

  methods: {
    ...mapActions(['IS_COLLAPSE']),
    changeMenus () {
      console.log(this.getIsCollapse)
      this.IS_COLLAPSE(!this.getIsCollapse)
    },
    getBreadcrumb () {
      console.log(this.$route.matched)

      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      // const first = matched[0]
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      console.log(this.levelList)
    }
  }
}

</script>
<style lang='scss' scoped>
.header{
  width: 100%;
  height: 60px;
  background: var(--PC_theme_header_color);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .left{
    margin-left: 20px;
    display: flex;
    align-items: center;
    .xx-svg-icon{
      cursor: pointer;
      margin-right: 20px;
    }
  }
}

</style>

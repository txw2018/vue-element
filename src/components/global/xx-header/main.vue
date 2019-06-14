<!-- 头部 -->
<template>
  <div class="header">
      <div class="left">
        <xx-svg-icon iconClass='indent' @click.native="changeMenus"></xx-svg-icon>
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
    }
  },

  components: {},

  computed: {
    ...mapGetters(['getIsCollapse'])
  },

  mounted () {},

  methods: {
    ...mapActions(['IS_COLLAPSE']),
    changeMenus () {
      console.log(this.getIsCollapse)
      this.IS_COLLAPSE(!this.getIsCollapse)
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
  .left{
    float: left;
    margin-left: 20px;
    .xx-svg-icon{
      cursor: pointer;
    }
  }
}

</style>

<!--   展示全局方法组件 -->
<template>
  <div>
    <el-button @click="showAlert">Alert</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    /**
     * @description 展示alert组件
     */
    showAlert () {
      this.$Alert.info({
        content: '我是Alert全局组件提示'
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>

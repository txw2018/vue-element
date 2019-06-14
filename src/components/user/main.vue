<!--  个人信息 -->
<template>
  <div class="user">
    <img src="../../assets/images/avatar.jpeg" alt="">
    <h3 v-show="!isCollapse">蜡笔小新</h3>
    <span v-show="!isCollapse">广东 广州</span>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.user{
  padding-top: 20px;
  text-align: center;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}

</style>

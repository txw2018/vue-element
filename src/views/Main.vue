<template>
  <el-container>
    <el-aside width="auto">
      <Menus></Menus>
    </el-aside>
    <el-container>
      <el-header>
        <xx-header></xx-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menus from '../components/menus/index.js'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    Menus
  }

}
</script>
<style lang="scss" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }

  .el-aside {
    background-color: var(--PC_theme_menu_color);
    height: 100vh;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: calc(100vh - 60px);
    overflow-y: scroll;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

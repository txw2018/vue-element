<!-- 主题设置 -->
<template>
  <el-card>
    <div class="el-row">
      <el-col :span="3">
        <p class="demonstration">{{headerColor}}</p>
        <el-color-picker @change="changeHeaderColor" v-model="headerColor"></el-color-picker>
      </el-col>
      <el-col :span="19" :offset="2">
        <xx-header></xx-header>
      </el-col>
    </div>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { LocalStorage } from '~utils/index'
import { theme } from '~styles/theme'
export default {
  name: 'theme',
  data () {
    return {
      headerColor: ''
    }
  },

  components: {},

  computed: {
    ...mapGetters(['getTheme'])

  },

  mounted () {
    console.log(this)
  },

  methods: {
    ...mapActions(['THEME']),
    getThemeColor () {
      this.headerColor = this.getTheme.PC_theme_header_color
    },
    /**
     * @description  改变header背景色
     */
    changeHeaderColor (value) {
      this.changeThemeColor('PC_theme_header_color', value)
    },
    /**
     * @description 改变主题颜色
     */
    changeThemeColor (key, color) {
      let themeColor = this.getTheme
      themeColor[key] = color
      theme(themeColor)
      LocalStorage.set('theme_color', themeColor)
      this.THEME(themeColor)
    }

  },
  created () {
    this.getThemeColor()
  }
}

</script>
<style lang='scss' scoped>
</style>

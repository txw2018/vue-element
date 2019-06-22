<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { theme } from '~styles/theme'
import { LocalStorage } from '~utils/index'

export default {
  computed: {
    ...mapGetters(['getTheme'])
  },
  methods: {
    ...mapActions(['THEME']),
    /**
     * @description 初始化主题
     */
    initTheme () {
      let themeColor = LocalStorage.get('theme_color')
      let data = JSON.parse(themeColor)
      console.log(data)
      if (data) {
        this.THEME(data)
      } else {
        LocalStorage.set('theme_color', this.getTheme)
      }
      theme(this.getTheme)
    }
  },
  created () {
    this.initTheme()
  }
}
</script>

<style lang="scss">
@import '~styles/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

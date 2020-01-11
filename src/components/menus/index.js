import User from '../user/index'
import { mapGetters } from 'vuex'
import { routes } from '../../router'
import './index.scss'
const menus = routes.sort((a, b) => a.meta.index - b.meta.index)
export default {
  name: 'menus',
  components: {
    User
  },
  data () {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters(['getIsCollapse']),
    isCollapse () {
      return this.getIsCollapse
    }
  },
  methods: {
    setBreadcrumb (path, paths) {

    },
    handleSelect (path, paths) {
      console.log(path, paths)
    },
    renderMune (menus) {
      return menus.map(menu => {
        if (menu.children) {
          return (
            <el-submenu index={menu.path}>
              <template slot="title">
                <xx-svg-icon iconClass={menu.meta.icon}></xx-svg-icon>
                <span slot="title">{menu.meta.title}</span>
              </template>
              { this.renderMune(menu.children)}
            </el-submenu>
          )
        } else {
          return (<el-menu-item index={menu.path}>
            <xx-svg-icon iconClass={menu.meta.icon}></xx-svg-icon>
            <span slot="title">{menu.meta.title}</span>
          </el-menu-item>)
        }
      })
    }
  },
  render () {
    return (
      <div class="menus">
        <el-menu
          style={{ minWidth: !this.isCollapse ? '200px' : 0 }}
          active-text-color="#000000"
          class="el-menu-vertical-demo"
          router={true}
          onSelect={this.handleSelect}
          collapse={this.isCollapse}>
          <User isCollapse ={this.isCollapse}></User>
          {this.renderMune(menus)}
        </el-menu>
      </div>
    )
  }
}

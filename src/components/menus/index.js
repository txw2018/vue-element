import MenuConfig from '../../config/menuConfig'
import User from '../user/index'
import { mapGetters } from 'vuex'
import './index.scss'
export default {
  name: 'menus',
  components: {
    User
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['getIsCollapse']),
    isCollapse () {
      return this.getIsCollapse
    }
  },
  methods: {
    renderMune (menus) {
      return menus.map(menu => {
        if (menu.children) {
          return (
            <el-submenu index={menu.path}>
              <template slot="title">
                <xx-svg-icon iconClass={menu.icon}></xx-svg-icon>
                <span slot="title">{menu.name}</span>
              </template>
              {this.renderMune(menu.children)}
            </el-submenu>
          )
        } else {
          return (<el-menu-item index={menu.path}>
            <xx-svg-icon iconClass={menu.icon}></xx-svg-icon>
            <span slot="title">{menu.name}</span>
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
          collapse={this.isCollapse}>
          <User isCollapse ={this.isCollapse}></User>
          {this.renderMune(MenuConfig)}
        </el-menu>
      </div>

    )
  }
}

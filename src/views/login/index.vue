<!--   登陆页面 -->
<template>
  <div class="login">
    <el-card class="box-card">
      <h1>蜡笔小新的后台管理系统</h1>
      <el-form :model="form" status-icon :rules="rules" ref="ruleForm2" label-width="52px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input type="text" v-model="form.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input type="password" v-model="form.passWord" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm2')" :loading="loading">{{loginWord}}</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'login-admin',
  data () {
    return {
      form: {
        account: '', // 登陆帐号
        passWord: '' // 密码

      },
      loading: false,
      loginWord: '登陆',
      rules: {
        account: [
          { required: true, message: '请输入登陆帐号', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入登陆密码', trigger: 'blur' }
        ]
      }
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginWord = '登陆中'
          this.loading = true
          setTimeout(() => {
            this.$router.push('/')
          }, 5000)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.login{
  width: 100vw;
  height: 100vh;
  background: url('../../assets/images/bg.jpg') no-repeat;
  background-size:cover;
  .demo-ruleForm{
    width: 300px;
    margin: auto;
  }
  .box-card{
    width: 500px;
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    box-shadow: rgba(0,0,0,0.6) 10px 10px 30px 10px;
    border-radius: 10px;
  }
}
</style>

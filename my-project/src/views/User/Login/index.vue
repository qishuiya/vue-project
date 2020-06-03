<template>
  <div id="login">
    登陆页面
    <el-button @click="handlerLogin('/')"
               type="primary"
               size="small">点击登陆</el-button>
    <el-button @click="handlerLogin('/user/logon')"
               type="primary"
               size="small">点击注册</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    handlerLogin (url) {
      this.$router.push(`${url}`)
    }
  }
}
</script>

<style>
</style>

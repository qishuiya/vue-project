<template>
  <div id="logon">
    注册页面
    <el-button @click="handlerLogin('/user/login')"
               type="primary"
               size="small">
      返回登陆
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'logon',
  methods: {
    handlerLogin (url) {
      this.$router.push(`${url}`)
    }
  }
}
</script>

<style>
</style>

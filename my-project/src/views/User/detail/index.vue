<template>
  <div id="detail"
       class="goldfish-user-details">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人资料</el-dropdown-item>
        <el-dropdown-item>我的关注</el-dropdown-item>
        <el-dropdown-item>我的收藏</el-dropdown-item>
        <el-dropdown-item>账号设置</el-dropdown-item>
        <el-dropdown-item divided>帮助</el-dropdown-item>
        <el-dropdown-item>
          <span @click="handlerLogin('/user/login')">
            退出登陆
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'detail',
  methods: {
    handlerLogin (url) {
      console.log(url)
      this.$router.push(`${url}`)
    }
  }
}
</script>

<style scoped>
.goldfish-user-details {
  width: 70px;
  margin-top: 5px;
}
.goldfish-user-details:hover {
  cursor: pointer;
}
</style>

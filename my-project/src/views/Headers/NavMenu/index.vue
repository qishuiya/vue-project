<template>
  <!-- 导航组件内容 -->
  <div id="NavMenu">
    <el-menu :default-active="activeIndex2"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             active-text-color="#ffd04b">
      <el-menu-item index="newInfo">最新资讯</el-menu-item>
      <el-menu-item index="forumCentre">论坛中心</el-menu-item>
      <el-menu-item index="taskCentre">任务中心</el-menu-item>
      <el-menu-item index="personalProfile">个人展示</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex2: 'newInfo'
    };
  },
  mounted () {
    // 获取当前路由值 
    const currentURL = this.$route.path;
    const navKey = currentURL.replace('/', '');
    // 改变导航菜单的key
    this.activeIndex2 = navKey;
  },
  methods: {
    handleSelect (key) {
      this.$router.push(`/${key}`)
    },
  }
}
</script>

<style scoped>
</style>

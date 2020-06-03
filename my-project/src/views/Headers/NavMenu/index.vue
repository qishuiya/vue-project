<template>
  <!-- 导航组件内容 -->
  <div id="NavMenu">
    <el-menu :default-active="activeIndex2"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item index="1">最新资讯</el-menu-item>
      <el-menu-item index="3">论坛中心</el-menu-item>
      <el-menu-item index="4">任务中心</el-menu-item>
      <el-menu-item index="5">个人展示</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style scoped>
</style>

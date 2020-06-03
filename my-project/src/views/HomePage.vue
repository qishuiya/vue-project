<template>
  <div id="HomePage">
    <el-container>
      <el-header>
        <headers />
      </el-header>
      <el-main>Main</el-main>
    </el-container>
    <!-- 顶部导航组件 -->

  </div>
</template>

<script>
import Headers from './Headers/index'
export default {
  name: 'HomePage',
  components: {
    Headers
  },
}
</script>

<style>
.el-header,
.el-main {
  padding: 0;
}
</style>

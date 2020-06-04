<template>
  <div id="HomePage">
    <el-container>
      <el-header>
        <headers />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

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
.el-header {
  width: 100%;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.el-main {
  position: relative;
  z-index: 9998;
  margin-top: 70px;
}
</style>

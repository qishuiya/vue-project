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
.el-header,
.el-main {
  padding: 0;
}
</style>

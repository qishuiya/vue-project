<template>
  <div id="Headers"
       class="goldfish-headers">
    <div class="goldfish-headers-left">
      <span class="goldfish-headers-log">logo</span>
      <nav-menu />
    </div>
    <user-detail />
  </div>
</template>

<script>
import NavMenu from './NavMenu/index'
import UserDetail from '../User/detail/index'
export default {
  name: 'Headers',
  components: {
    NavMenu,
    UserDetail
  },
  mounted () {
  }
}
</script>

<style scoped>
.goldfish-headers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #545c64;
}
.goldfish-headers-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.goldfish-headers-log {
  display: inline-block;
  width: 150px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: cornflowerblue;
}
</style>
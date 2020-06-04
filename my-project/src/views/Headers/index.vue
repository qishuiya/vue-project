<template>
  <div id="Headers"
       class="goldfish-headers">
    <div class="goldfish-headers-left">
      <img class="goldfish-headers-log"
           src="../../assets/images/logo.jpg"
           alt="">
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
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.goldfish-headers-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.goldfish-headers-log {
  display: inline-block;
  width: 150px;
  height: 59px;
}
</style>
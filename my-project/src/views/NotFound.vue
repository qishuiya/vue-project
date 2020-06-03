<template>
  <div id="NotFound"
       class="goldfish-result">
    <div class="goldfish-result-content">
      <router-link to="/">
        <span class="goldfish-result-content-text">返回首页</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',

}
</script>

<style scoped>
.goldfish-result-content {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/404.jpg");
  background-size: 100% 100%;
}
.goldfish-result-content-text {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, -50%);
  cursor: pointer;
  font-size: 20px;
  text-shadow: 2px 2px 2px grey;
  font-weight: bolder;
}
.goldfish-result-content-text:hover {
  text-shadow: 3px 3px 3px rgb(6, 202, 39);
  color: rgb(6, 202, 39);
}
</style>

<template>
  <div id="ForumCentre">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <span>本周(๑•̀ㅂ•́)و✧达人榜</span>
            <el-button style="float: right; padding: 3px 0"
                       type="text">
              更多<i class="el-icon-d-arrow-right" />
            </el-button>
            <div class="goldfish-list">
              <dl class="goldfish-list-content">
                <dt>
                  <el-avatar shape="square"
                             src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
                </dt>
                <dd>
                  <span>泪微凉。</span>
                  <div>
                    <el-tag size="mini">关注</el-tag>
                    <el-tag size="mini">私信</el-tag>
                  </div>
                </dd>
              </dl>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'ForumCentre',
}
</script>

<style scoped>
.goldfish-list-content {
  margin: 8px 0;
  display: flex;
  align-items: center;
}
dl {
  height: 50px;
}
.el-avatar {
  width: 50px;
  height: 50px;
}
dl dt {
  margin-right: 10px;
}
dl dd {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* .el-tag {
  margin: 5px;
} */
</style>

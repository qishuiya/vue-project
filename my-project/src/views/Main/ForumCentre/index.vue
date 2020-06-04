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

              <dl v-for="(item,index) in list"
                  :key="index"
                  class="goldfish-list-content">
                <dt>
                  <el-avatar shape="square"
                             :src="item.imgURL"></el-avatar>
                </dt>
                <dd>
                  <div>{{item.name}}</div>
                  <div>
                    <el-tag size="mini">关注</el-tag>
                    <el-tag size="mini">私信</el-tag>
                  </div>
                </dd>
              </dl>
            </div>
          </el-card>
          <el-card class="box-card tow-card">
            <span>本周(๑•̀ㅂ•́)و✧达人榜</span>
            <el-button style="float: right; padding: 3px 0"
                       type="text">
              更多<i class="el-icon-d-arrow-right" />
            </el-button>
            <div class="goldfish-list">

              <dl v-for="(item,index) in list"
                  :key="index"
                  class="goldfish-list-content">
                <dt>
                  <el-avatar shape="square"
                             :src="item.imgURL"></el-avatar>
                </dt>
                <dd>
                  <div>{{item.name}}</div>
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
            <el-table ref="filterTable"
                      :data="tableData"
                      style="width: 100%">
              <el-table-column prop="title"
                               label="标题">
              </el-table-column>
              <el-table-column prop="name"
                               label="提问人"
                               width="150">
              </el-table-column>
              <el-table-column prop="address"
                               width="100"
                               label="回复数">
              </el-table-column>
              <el-table-column prop="tag"
                               label="人气"
                               width="70">

              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'ForumCentre',
  data () {
    return {
      list: [
        {
          id: '0000',
          name: '秦始皇',
          imgURL: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        },
        {
          id: '0000',
          name: '刘邦',
          imgURL: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        },
        {
          id: '0000',
          name: '项羽',
          imgURL: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        },
        {
          id: '0000',
          name: '张飞',
          imgURL: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        },
      ],
      tableData: [
        {
          title: '线程中使用全局变量，发现内存不释放',
          type: 'c#',
          name: '傻子',
          address: '443',
          tag: '3'
        }, {
          title: ' double类型的疑惑',
          type: 'c++ 语言',
          name: '大傻子',
          address: '742',
          tag: '23'
        }, {
          title: 'c# 调用Fortran编写的dll时如何捕捉到fortran内部的异常',
          type: 'c#',
          name: '二傻子',
          address: '98',
          tag: '67'
        }, {
          title: 'Oracle 11g jdbc连接sysdba用户',
          type: '开发',
          name: '小傻子',
          address: '135',
          tag: '23'
        }
      ]
    }
  },
  methods: {
    resetDateFilter () {
      this.$refs.filterTable.clearFilter('date');
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter();
    },
    formatter (row, column) {
      return row.address;
    },
    filterTag (value, row) {
      return row.tag === value;
    },
    filterHandler (value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.el-tag {
  margin-right: 5px;
  cursor: pointer;
}
.tow-card {
  margin-top: 10px;
}
</style>

<template>
 <div class="menu">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">
        <el-dropdown>
          <span>
            产品和解决方案<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
      <el-menu-item index="3">有赞云</el-menu-item>
      <el-menu-item index="4">渠道合作</el-menu-item>
      <el-menu-item index="5">
        <el-dropdown>
          <span>
            服务资源<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
      <el-button class="bu" type="primary" plain><router-link to="/helloWorld">登录</router-link></el-button>
      <el-button class="bu" type="primary">注册</el-button>
    </el-menu>
  </div>    
</template>

<script>

export default {
    data() {
      return {
        // activeIndex: '1',
        // activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
  .el-menu {
    /* float: left;  */
    margin-top: -10px;
    margin-left: 150px;
  }
  .el-menu-item {
    width: 120px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    display: inline-block;
    float: left;
    list-style: none;
    /* margin-top: -60px; */
    /* margin-left: 400px; */
    font-size: 15px;
  }
  .el-menu-item :nth-child(2) {
    /* margin-left: 40px; */
  }
  .bu {
    width: 80px;
    height: 30px;
    line-height: 5px;
    display: inline-block;
    margin-top: 15px;
    margin-left: 40px;
  }
</style>

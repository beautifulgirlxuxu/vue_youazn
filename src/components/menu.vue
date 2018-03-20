<template>
  <div class="menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
      <el-menu-item index="3">有赞云</el-menu-item>
      <el-menu-item index="4">渠道合作</el-menu-item>
      <el-menu-item index="5">
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
      </el-menu-item>
      <el-menu-item index="6">消费保障</el-menu-item>
      <el-button type="primary">登录</el-button>
      <el-menu-item index="8"><el-button type="primary" plain>注册</el-button></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
  .el-menu {
    /* float: left;  */
  }
  .el-menu-item {
    width: 120px;
    /* display: inline-block; */
    float: left;
    list-style: none;
    padding-left: 10px;
    font-size: 15px;
  }
</style>

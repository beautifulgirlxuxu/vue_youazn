<template>
  <div id="app">
    <el-container>
      <el-header>
        <img class="logo" src="./assets/logo.png" alt="">
        <span class="title">有赞</span>
        <nav-menu />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './components/menu'
export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style>
.el-header, .el-footer {
    background-color: white;
    color: #333;
    /* text-align: center; */
    height: 80px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .logo {
    /* display: inline-block; */
    width: 25px;
    height: 25px;
    float: left;
    margin-top: 10px;
    margin-left: 120px;
  }
  .title {
    display: inline-block;
    float: left;
    padding-top: 5px;
    padding-left: 4px;
    font: bold;
    font-size: 24px;
  }
  .menu {
    display: inline;
    float: left;
     padding-top: -50px;
    padding-left: -50px;
  }
  /* .title */
</style>

<template>
  <div id="app">
    <el-container>
      <el-header>
        <img class="logo" src="./assets/logo.png" alt="">
        <Menu />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/menu'
export default {
  name: 'App',
  components: MenuS
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .logo {
    width: 60px;
    height: 60px;
    float: left;
  }
</style>

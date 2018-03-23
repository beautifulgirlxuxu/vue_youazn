<template>
  <div id="app">
    <el-container>
      <el-header>
        <img class="logo" src="./assets/logo.png" alt="">
        <span class="title">有赞</span>
        <nav-menu />
      </el-header>
      <el-main>
        <Slider />
        <Shop />
        <Retail />
        <MiniProgram />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './components/menu'
import Slider from './components/slider'
import Shop from './components/shop'
import Retail from './components/retail'
import MiniProgram from './components/miniProgram'
export default {
  name: 'App',
  components: {
    NavMenu,
    Slider,
    Shop,
    Retail,
    MiniProgram
  }
}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: white;
    color: #333;
    /* text-align: center; */
    height: 80px;
  }
  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .logo {
    /* display: inline-block; */
    width: 30px;
    height: 30px;
    float: left;
    margin-top: 6px;
    margin-left: 120px;
  }
  .title {
    display: inline-block;
    float: left;
    padding-top: 8px;
    padding-left: 4px;
    font: bold;
    font-size: 20px;
  }
  .menu {
    display: inline;
    float: left;
     padding-top: -50px;
    padding-left: -50px;
  }

</style>

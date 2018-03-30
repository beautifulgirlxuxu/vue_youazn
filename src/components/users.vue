<template>
  <div class="users">
      <h1>他们都在用有赞</h1>
      <div class="container">
        <div class="user">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case1.jpg" alt="">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case_logo_1.png" alt="">
          <p>经营类目：亲子自媒体</p>
        </div>
        <div class="user">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case2.jpg" alt="">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case_logo_2.png" alt="">
          <p>经营类目：休闲零食</p>
        </div>
        <div class="user">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case3.jpg" alt="">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case_logo_3.png" alt="">
          <p>经营类目：水果生鲜</p>
        </div>
        <div class="user">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case4.jpg" alt="">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case_logo_4.png" alt="">
          <p>经营类目：蛋糕烘培</p>
        </div>
        <div class="user">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case5.jpg" alt="">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case_logo_5.png" alt="">
          <p>经营类目：服饰</p>
        </div>
        <div class="user">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case6.jpg" alt="">
          <img src="https://img.yzcdn.cn/static/intro/img/newIndex/case_logo_6.png" alt="">
          <p>经营类目：日用百货</p>
        </div>
        <el-button type="primary" plain>更多案例</el-button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.users {
  width: 1200px;
  height: 800px;
  /* background-color:red; */
}
h1 {
  height: 20px;
  text-align: center;
  margin-left: 80px;
  margin-bottom: 120px;
}
.container {
  width: 100%;
  height: 100%;
  margin-left: 80px;
  background-color: red;
}
.user {
  width: 352px;
  height: 300px;
  margin: 10px 10px;
  background-color:greenyellow;
  float: left;
}
.user img:nth-child(1) {
  width: 100%;
}
.user img:nth-child(2) {
  display: block;
  width: 118px;
  height: 22px;
  float: left;
  margin-top: -40px;
  margin-left: 35px;
}
.user p {
  width: 150px;
  height: 32px;
  font-size: 14px;
  float: left;
  margin-top: -50px;
  margin-left: 30px;
}
.el-button {
  clear: both;
  width: 150px;
  height: 50px;
  line-height: 10px;
  text-align: center;
  display: block;
  margin-top: 120px;
  margin-left: 480px;
}
</style>

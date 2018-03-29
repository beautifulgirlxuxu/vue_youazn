<template>
  <div class="users">
      <h1>他们都在用有赞</h1>
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
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.users {
  width: 100%;
  height: 1000px;
  /* padding: 0 auto; */
}
.user {
  width: 352px;
  height: 300px;
  margin: 10px 10px;
  /* background-color: red; */
  float: left;
}
.user img:nth-child(1) {
  width: 100%;
}
.user img:nth-child(2) {
  display: inline-block;
  width: 118px;
  height: 22px;
  position: absolute;
  margin-top: -40px;
  margin-left: -145px;
}
.user p {
  width: 140px;
  height: 22px;
  font-size: 14px;
  position: absolute;
  margin-top: -55px;
  margin-left: 30px;
}
</style>

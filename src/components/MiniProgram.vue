<template>
    <div class="retail">
        <span class="title"><strong>有赞小程序-无需开发 全行业快速开店</strong></span>
        <div class="button">
        </div>
        <div class="content">
            <div class="left">        
                <div class="left-son">
                    <img src="https://img.yzcdn.cn/intro/index/weapp_1.png" alt="">
                    <div>
                        <h3>微信40+流量入口持续布局</h3>
                        <p>追赶风口把握10亿用户</p>
                    </div>
                </div>
                <div class="left-son">
                    <img src="https://img.yzcdn.cn/intro/index/weapp_2.png" alt="">
                    <div>
                        <h3>全行业小程序开店</h3>
                        <p>一键授权，拥有自己的小程序</p>
                    </div>
                </div>
                <div class="left-son">
                    <img src="https://img.yzcdn.cn/intro/index/weapp_3.png" alt="">
                    <div>
                        <h3>完整的移动电商解决方案</h3>
                        <p>装修/营销/客户管理/交易系统</p>
                    </div>
                </div>
                <div class="left-son">
                    <img src="https://img.yzcdn.cn/intro/index/weapp_4.png" alt="">
                    <div>
                        <h3>全面满足门店场景</h3>
                        <p>自提/同城送/卡券营销/优惠买单</p>
                    </div>
                </div>
                <div class="btn">
                    <el-button type="success">立即开通</el-button>
                    <el-button class="btn-second" type="success" plain>功能介绍</el-button>
                </div>
            </div>
            <div class="right">
                <img src="https://img.yzcdn.cn/public_files/2018/02/12/1991b416c530b13ff5e168f278e3ff86.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.retail {
    width: 100%;
    height: 660px;
}
.title{
    display: inline-block;
    width: 100%;
    height: 200px;
    font-size: 26px;
    padding-top: -60px;
    
}
.button {
     margin: -140px auto;
}
.btn {
    margin-top: -25px;
    padding-left: 120px;
}
.el-button {
    width: 128px;
    height: 40px;
}
.content {
    text-align: left;
}
.left {
    float: left;
    width: 500px;
    height: 460px;
    margin-top: 70px;
}
.left-son {
    width: 100%;
    height: 80px;
}
.left-son img {
    margin: 30px 120px;
}
.left-son div {
    width: 300px;
    float: right;
    margin-top: -240px;
}
.left-son h3 {
    width: 100%;
    height: 10px;
    font-size: 17px;
}
.left-son p {
    height: 20px;
}
.right {
    height: 443px;
    float: right;
    margin-top: 70px;
    margin-left: 50px;
}
</style>

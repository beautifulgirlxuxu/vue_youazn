<template>
    <div class="shop">
        <h1>有赞微商城-解决网上开店所有问题</h1>
        <div class="button">
            <el-button type="primary">免费试用</el-button>
            <el-button type="primary" plain>功能介绍</el-button>
        </div>
        <div class="content">
            <div class="left">        
                <div class="left-lf">
                    <div>
                        <h3>3分钟搭建移动商城</h3>
                        <p>根据你的行业特点</p>
                        <p>匹配装修模板和经营方案</p>
                    </div>
                    <div>
                        <h3>系统化管理客户</h3>
                        <p>帮你生成客户画像</p>
                        <p>积分、会员精准营销</p>
                    </div>
                </div>
            <div class="left-rg">
                <div>
                    <h3>近百种营销工具</h3>
                    <p>社群营销&节日营销</p>
                    <p>拉新、转化、复购面面俱到</p>
                </div>
                <div>
                    <h3>分销拓展销售渠道</h3>
                    <p>客户帮你卖 员工帮你卖</p>
                    <p>300万商家帮你卖</p>
                </div>
            </div>
            </div>
            <div class="right">
                <img src="https://img.yzcdn.cn/public_files/2018/02/11/6d246a7ac6abbcee3c39ceb6396f3ec3.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.shop {
    width: 100%;
    height: 650px;
    /* background-color: yellowgreen; */
    margin-top: 10px;
}
h1{
    display: inline-block;
}
.button {
    margin: -120px auto;
}
.el-button {
    width: 128px;
}
.content {
    text-align: left;
}
.left {
    float: left;
    width: 500px;
    height: 300px;
    margin: 60px 100px;
}
.left h3 {
    width: 250px;
    height: 25px;
    font-size: 18px;
}
.left p {
    width: 250px;
    height: 15px;
    font-size: 16px;
}
.left-lf {
    float: left;
}
.left-lf div:nth-child(2) {
    margin-top: 80px;
}
.left-rg div:nth-child(2) {
    margin-top: 80px;
}
.left-rg {
    float: right;
}
.right {
    height: 455px;
    float: right;
    margin-top: -310px;
    margin-right: 100px;
}
</style>

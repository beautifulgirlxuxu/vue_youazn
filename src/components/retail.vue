<template>
    <div class="retail">
        <span class="title"><strong>有赞零售-让门店生意更高效</strong></span>
        <div class="button">
            <el-button type="primary">免费试用</el-button>
            <el-button type="primary" plain>功能介绍</el-button>
        </div>
        <div class="content">
            <div class="right">        
                <div class="right-lf">
                    <div>
                        <h3>门店网店互通</h3>
                        <p>统一管理商品，效率高</p>
                        <p>营销玩法联动，卖货快</p>
                    </div>
                    <div>
                        <h3>总部运营中心</h3>
                        <p>多家门店联合经营</p>
                        <p>一个后台轻松管理</p>
                    </div>
                </div>
            <div class="right-rg">
                <div>
                    <h3>经营自己的会员</h3>
                    <p>统一管理商品，效率高</p>
                    <p>营销玩法联动，卖货快</p>
                </div>
                <div>
                    <h3>重新定义收银</h3>
                    <p>稳定高效的收银设备</p>
                    <p>自由组合，快速上手</p>
                </div>
            </div>
            </div>
            <div class="left">
                <img src="https://img.yzcdn.cn/public_files/2018/02/12/9de50602de27fc75b392fee1a43f9de6.png" alt="">
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
    background-color: aquamarine;
    margin-top: -50px;
}
.title{
    display: inline-block;
    width: 100%;
    height: 200px;
    font-size: 26px;
    padding-top: -60px;
    /* position: absolute; */
    
}
.button {
     margin: -140px auto;
}
.el-button {
    width: 128px;
}
.content {
    text-align: left;
}
.right {
    float: right;
    width: 500px;
    height: 300px;
    margin-top: 70px;
}
.right h3 {
    width: 250px;
    height: 25px;
    font-size: 18px;
}
.right p {
    width: 250px;
    height: 15px;
    font-size: 16px;
}
.right-lf {
    float: left;
}
.right-lf div:nth-child(2) {
    margin-top: 80px;
}
.right-rg div:nth-child(2) {
    margin-top: 80px;
}
.right-rg {
    float: right;
}
.left {
    height: 418px;
    float: left;
    /* margin-top: 160px; */
    padding-top: 160px;
    margin-left: 50px;
}
</style>

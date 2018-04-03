<template>
    <div class="block">
        <el-carousel trigger="click" height="380px">
            <el-carousel-item v-for="item in items" :key="item">
                <img :src="item.src" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items:[
                 {src: 'https://img.yzcdn.cn/static/intro/img/newIndex/topbanner1.jpg'},
                 {src: 'https://img.yzcdn.cn/public_files/2017/10/11/54fbf8f46237a68da47b4f09687f6678.jpg'}
                //  {src: 'https://img.yzcdn.cn/public_files/2018/02/26/cf3b21c3157240ce8dfb289c3ab21bbe.jpg'}
            ]
        }
    }
}
</script>

<style scoped>
    .block {
        background-color: pink;
    }
</style>

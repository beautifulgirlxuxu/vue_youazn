<template>
    <div class="block">
        <el-carousel trigger="click" height="380px">
            <el-carousel-item v-for="item in 2" :key="item">
            <!-- <h3>{{ item }}</h3> -->
            <h3><img src="../assets/slide1.png" alt=""></h3>
            <img src="../assets/slide2.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .block {
        background-color: pink;
    }
</style>

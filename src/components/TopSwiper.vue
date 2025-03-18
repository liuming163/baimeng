<template>
  <div class="top-swiper">
    <!-- 顶部通用swiper -->
    <el-carousel>
      <el-carousel-item v-for="item in swiperList" :key="item.id">
        <img :src="item.img" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const swiperList = ref([
  {
    id: 1,
    img: 'http://image.veseo.cn/6ffefljyta2tsflmhc',
  },
  {
    id: 2,
    img: 'http://image.veseo.cn/6ffefljyta2tsflmhc',
  },
])
</script>

<style lang="scss" scoped>
.top-swiper {
  width: 100%;
  padding-top: 120px;

  img {
    width: 100%;
    vertical-align: middle;
  }
}
</style>

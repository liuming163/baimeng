<template>
  <div class="home">
    <!-- 首页 -->
    <swiper
      :slides-per-view="1"
      :direction="'vertical'"
      pagination
      class="swiper-box"
    >
      <swiper-slide>
        <swiper :slides-per-view="1" pagination class="swiper-box">
          <swiper-slide v-for="slide in slides" :key="slide.id">
            <img :src="slide.image" :alt="slide.alt" />
          </swiper-slide>
        </swiper>
      </swiper-slide>
      <swiper-slide>
        <HomePage2 />
      </swiper-slide>
      <swiper-slide>
        <HomePage3 />
      </swiper-slide>
      <swiper-slide>
        <HomePage4 class="home-page" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://image.veseo.cn/im3m8f3xyp9hfzzvx9" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import HomePage2 from './components/HomePage2.vue'
import HomePage3 from './components/HomePage3.vue'
import HomePage4 from './components/HomePage4.vue'

const slides = ref([
  { id: 1, image: 'https://image.veseo.cn/gx5jesf9qty5vprnzb', alt: 'Slide 1' },
  { id: 2, image: 'https://image.veseo.cn/v3kjdc4xcv90ia6o2s', alt: 'Slide 2' },
  { id: 3, image: 'https://image.veseo.cn/im3m8f3xyp9hfzzvx9', alt: 'Slide 3' },
])
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .swiper-box {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      object-fit: cover;
    }

    .home-page {
      padding: 120px;
    }
  }
}
</style>

<template>
  <div class="home-page3">
    <div class="title">
      <p>CASE RECOMMENDED</p>
      <h3>案例展示</h3>
      <div class="line"></div>
      <div class="det">
        无论是创意、设计、还是体验，我们都力求颠覆传统，在每一个细节中做到完美极致！
      </div>
    </div>
    <div class="inner">
      <swiper :slides-per-view="1" pagination class="swiper-box">
        <swiper-slide v-for="slide in slides" :key="slide.id">
          <div class="swiper-box-content">
            <div
              v-for="item in slide.content"
              :key="item.id"
              class="content-item"
            >
              <img :src="item.image" />
              <p class="item-title">{{ item.title }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const slides = ref([
  {
    id: 1,
    content: [
      {
        id: 11,
        image: 'https://image.veseo.cn/gx5jesf9qty5vprnzb',
        alt: 'Slide 1',
        title: '恩喜整形-桃花姬主题名媛会11',
      },
      {
        id: 12,
        image: 'https://image.veseo.cn/v3kjdc4xcv90ia6o2s',
        alt: 'Slide 2',
        title: '恩喜整形-桃花姬主题名媛会12',
      },
      {
        id: 13,
        image: 'https://image.veseo.cn/im3m8f3xyp9hfzzvx9',
        alt: 'Slide 3',
        title: '恩喜整形-桃花姬主题名媛会13',
      },
    ],
  },
  {
    id: 2,
    content: [
      {
        id: 21,
        image: 'https://image.veseo.cn/gx5jesf9qty5vprnzb',
        alt: 'Slide 1',
        title: '恩喜整形-桃花姬主题名媛会21',
      },
      {
        id: 22,
        image: 'https://image.veseo.cn/v3kjdc4xcv90ia6o2s',
        alt: 'Slide 2',
        title: '恩喜整形-桃花姬主题名媛会22',
      },
      {
        id: 23,
        image: 'https://image.veseo.cn/im3m8f3xyp9hfzzvx9',
        alt: 'Slide 3',
        title: '恩喜整形-桃花姬主题名媛会23',
      },
    ],
  },
  {
    id: 3,
    content: [
      {
        id: 31,
        image: 'https://image.veseo.cn/gx5jesf9qty5vprnzb',
        alt: 'Slide 1',
        title: '恩喜整形-桃花姬主题名媛会31',
      },
      {
        id: 32,
        image: 'https://image.veseo.cn/v3kjdc4xcv90ia6o2s',
        alt: 'Slide 2',
        title: '恩喜整形-桃花姬主题名媛会32',
      },
      {
        id: 33,
        image: 'https://image.veseo.cn/im3m8f3xyp9hfzzvx9',
        alt: 'Slide 3',
        title: '恩喜整形-桃花姬主题名媛会33',
      },
    ],
  },
])
</script>

<style lang="scss" scoped>
.home-page3 {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 120px;

  .title {
    min-height: 30%;
    font-size: 24px;
    text-align: center;
    color: #767676;

    h3 {
      font-size: 36px;
      font-weight: 600;
      margin: 10px 0 20px;
    }

    .line {
      width: 200px;
      height: 6px;
      background: var(--active-color);
      margin: 0 auto;
      border-radius: 10px;
    }

    .det {
      font-size: 18px;
      color: #000;
      margin-top: 40px;
    }
  }

  .inner {
    width: 100%;
    height: 60%;
    margin-top: 4%;

    .swiper-box {
      width: 100%;
      height: 100%;

      .swiper-box-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        cursor: pointer;

        .content-item {
          width: 30%;
          height: 100%;
          margin: 0 5px;

          img {
            width: 100%;
            object-fit: cover;
          }

          .item-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 20px 0;
            position: relative;
            width: 90%;
            text-align: center;
            background-color: #fff;
            top: -50px;
            margin: 0 auto;
            font-size: 24px;
            box-shadow: 0px 2px 11px -2px var(--active-color);
            -webkit-box-shadow: 0px 2px 11px -2px var(--active-color);
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="home-page7">
    <div class="top">
      <div class="title">
        <p>CPPPERATIVE PARTNER</p>
        <h3>合作伙伴</h3>
        <div class="line"></div>
        <div class="det">
          无论是创意、设计、还是体验，我们都力求颠覆传统，在每一个细节中做到完美极致！
        </div>
      </div>
      <div class="contact-swiper">
        <div class="swiper-container">
          <swiper :slides-per-view="1" pagination class="swiper-box">
            <swiper-slide v-for="slide in slides" :key="slide.id">
              <div class="row">
                <div v-for="item in slide.imgs" :key="item.id" class="col">
                  <img :src="item.img" alt="合作伙伴" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="inner">
        <div class="t">
          <div class="l">
            <div v-for="item in contactList" :key="item.id" class="item">
              <el-icon color="#fff" size="20px"><Paperclip /></el-icon>
              <span>{{ item.info }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <a href="#" v-for="item in companyInfo" :key="item.id"
          ><p>{{ item.info }}</p></a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { Paperclip } from '@element-plus/icons-vue'

const slides = ref([
  {
    id: 1,
    imgs: [
      { id: 11, img: 'http://image.veseo.cn/n0165l7n27e90vr4hl' },
      { id: 12, img: 'http://image.veseo.cn/n0165l7n27e90vr4hl' },
      { id: 13, img: 'http://image.veseo.cn/n0165l7n27e90vr4hl' },
      { id: 14, img: 'http://image.veseo.cn/n0165l7n27e90vr4hl' },
      { id: 15, img: 'http://image.veseo.cn/n0165l7n27e90vr4hl' },
      { id: 16, img: 'http://image.veseo.cn/n0165l7n27e90vr4hl' },
      { id: 17, img: 'http://image.veseo.cn/n0165l7n27e90vr4hl' },
      { id: 18, img: 'http://image.veseo.cn/n0165l7n27e90vr4hl' },
    ],
  },
  {
    id: 2,
    imgs: [
      { id: 21, img: 'http://image.veseo.cn/r28hmmwmjac6q22izo' },
      { id: 22, img: 'http://image.veseo.cn/r28hmmwmjac6q22izo' },
      { id: 23, img: 'http://image.veseo.cn/r28hmmwmjac6q22izo' },
      { id: 24, img: 'http://image.veseo.cn/r28hmmwmjac6q22izo' },
      { id: 25, img: 'http://image.veseo.cn/r28hmmwmjac6q22izo' },
      { id: 26, img: 'http://image.veseo.cn/r28hmmwmjac6q22izo' },
      { id: 27, img: 'http://image.veseo.cn/r28hmmwmjac6q22izo' },
      { id: 28, img: 'http://image.veseo.cn/r28hmmwmjac6q22izo' },
    ],
  },
  {
    id: 3,
    imgs: [
      { id: 31, img: 'http://image.veseo.cn/rw6swawdh1ogpnq6yc' },
      { id: 32, img: 'http://image.veseo.cn/rw6swawdh1ogpnq6yc' },
      { id: 33, img: 'http://image.veseo.cn/rw6swawdh1ogpnq6yc' },
      { id: 34, img: 'http://image.veseo.cn/rw6swawdh1ogpnq6yc' },
      { id: 35, img: 'http://image.veseo.cn/rw6swawdh1ogpnq6yc' },
      { id: 36, img: 'http://image.veseo.cn/rw6swawdh1ogpnq6yc' },
      { id: 37, img: 'http://image.veseo.cn/rw6swawdh1ogpnq6yc' },
      { id: 38, img: 'http://image.veseo.cn/rw6swawdh1ogpnq6yc' },
    ],
  },
])

const contactList = ref([
  {
    id: 1,
    icon: 'Iphone',
    info: '手机：15755173533',
  },
  {
    id: 2,
    icon: 'ChromeFilled',
    info: 'QQ：405058688',
  },
  {
    id: 3,
    icon: 'LocationInformation',
    info: '地址：包河区罍街安商1980C座303',
  },
])

const companyInfo = ref([
  {
    id: 1,
    info: '备案号： 皖ICP备2022002508号-1',
  },
  {
    id: 2,
    info: 'Copyright © 合肥丰杨文化传媒有限公司',
  },
  {
    id: 3,
    info: '技术支持：安徽沃龙',
  },
])
</script>

<style lang="scss" scoped>
.home-page7 {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .top {
    box-sizing: border-box;
    height: 70%;
    padding: 120px 120px 0;
    background: url('https://static.0551seo.cn/ninety-nine/assets/imgs/contact-bg.jpg')
      center center no-repeat;
    .title {
      color: #000;
      text-align: center;

      p {
        font-size: 24px;
        line-height: 36px;
      }

      h3 {
        font-size: 36px;
        font-weight: 550;
        margin-bottom: 20px;
      }

      .line {
        width: 200px;
        height: 6px;
        background: #a00b00;
        margin: 0 auto;
        border-radius: 10px;
      }

      .det {
        margin-top: 40px;
        font-size: 18px;
        box-sizing: border-box;
      }
    }

    .contact-swiper {
      width: 100%;
      margin-top: 2%;
      box-sizing: border-box;

      .swiper-container {
        padding-bottom: 50px !important;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
      }

      .swiper-box {
        width: 100%;
        height: 100%;
        overflow: hidden;

        .row {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;

          .col {
            box-sizing: border-box;
            flex: 0 0 25%;
            width: 25%;
            padding: 0 10px;
            text-align: center;
            margin-bottom: 20px;

            img {
              border: 2px solid #ccc;
              width: 100%;
              height: auto;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }

  .bottom {
    position: relative;
    height: 30%;
    background-color: #000;

    .inner {
      width: 100%;
      height: 100%;
      padding: 0 120px;
      box-sizing: border-box;

      .t {
        position: relative;
        top: -40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #a00b00;
        border-radius: 60px;
        padding: 20px 120px;
        box-sizing: border-box;

        .l {
          box-sizing: border-box;
          width: 70%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          .item {
            width: 40%;
            display: flex;
            align-items: center;
            box-sizing: border-box;

            span {
              font-size: 18px;
              padding-left: 5px;
              color: #fff;
            }
          }
        }
      }
    }

    .info {
      position: absolute;
      bottom: 40%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      display: flex;
      justify-content: center;
      height: 30px;
      box-sizing: border-box;

      p {
        font-size: 15px;
        padding: 0 10px;
        color: rgba($color: #ffffff, $alpha: 0.6);
      }
    }
  }
}
</style>

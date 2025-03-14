<template>
  <div class="home-page5">
    <div class="bg">
      <img
        src="http://static.0551seo.cn/ninety-nine/assets/imgs/about-bg.jpg"
        alt="bg"
      />
    </div>
    <div class="title">
      <p>ABOUT US</p>
      <h3>走进丰杨</h3>
      <div class="line"></div>
      <div class="det">一站式活动策划专家 让您享受活动全过程</div>
    </div>
    <div class="inner">
      <p class="intr">
        合肥丰杨文化传媒有限公司，是一家专业从事企事业单位大型庆典活动，奠基仪式、地产开盘、开业庆典、开幕仪式、文艺演出、商务酒会、商务促销、展览展示、商业美陈等，从策划到现场布置以及灯光设备租用的综合性一站式服务公司，公司本着以经营品牌的理念为客户创造效益。
        先进的庆典道具为您提供专业的服务，且用我们的专业和我们的诚信服务好每一位顾客。
        同时竭诚欢迎各地广告、礼仪、演出和展览公司的朋友与我们交流合作！
      </p>
      <div class="bottom">
        <div v-for="item in originList" :key="item.title" class="item">
          <div class="t">
            <h4>{{ item.title + ' / ' }}</h4>
            <div>{{ item.en }}</div>
          </div>
          <div class="hg"></div>
          <div class="det">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const originList = ref([
  {
    title: '创意',
    en: 'ORIGINALITY',
    desc: '力求颠覆传统',
  },
  {
    title: '设计',
    en: 'DESIGN',
    desc: '专业团队创造',
  },
  {
    title: '体验',
    en: 'experience',
    desc: '细节完美极致',
  },
])
</script>

<style lang="scss" scoped>
.home-page5 {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bg {
    position: absolute;
    z-index: -1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-transition: -webkit-transform 2.5s;
      transition: -webkit-transform 2.5s;
      transition: transform 2.5s;
      transition: transform 2.5s, -webkit-transform 2.5s;
      -webkit-transform: scale(1.15);
      -ms-transform: scale(1.15);
      transform: scale(1.15);
      -o-object-fit: cover;
      object-fit: cover;
      will-change: transform;
    }
  }

  .title {
    min-height: 30%;
    font-size: 24px;
    text-align: center;
    color: #221815;

    p {
      color: #767676;
    }

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
      margin-top: 40px;
    }
  }

  .inner {
    margin-top: 6%;
    width: 100%;
    height: 64%;

    .intr {
      font-size: 18px;
      text-indent: 36px;
      color: #767676;
      line-height: 32px;
    }

    .bottom {
      box-sizing: border-box;
      margin-top: 10%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;

      .item {
        width: 25%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .t {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 10px;
          color: #221815;
          font-size: 24px;
          line-height: 40px;

          h4 {
            font-weight: 550;
          }

          span {
            font-weight: 100;
          }
        }

        .hg {
          width: 50px;
          height: 3px;
          background-color: #b8b9bb;
        }

        .det {
          margin-top: 15px;
          color: #767676;
          line-height: 32px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="home-page2">
    <ul class="top">
      <li v-for="item in countList" :key="item.id" class="list-item">
        <p class="count">{{ item.count }}</p>
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <div class="bottom">
      <div class="inner">
        <div class="left">left</div>
        <div class="right">
          <div class="en">
            <p>WHAT WE DO</p>
            <div class="line"></div>
          </div>
          <p class="cn">丰杨能为您做些什么?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 公司数据
const countList = ref([
  {
    id: 1,
    title: '年活动策划经验',
    count: '10+',
  },
  {
    id: 2,
    title: '服务客户',
    count: '800+',
  },
  {
    id: 3,
    title: '落地活动',
    count: '1200+',
  },
  {
    id: 4,
    title: '创意设计团队',
    count: '100+',
  },
])
// 公司产品
// const typeOptions = ref([
//   {
//     id: '01',
//     title: '庆典活动类',
//     details: '文艺晚会、开工奠基',
//   },
//   {
//     id: '02',
//     title: '会议服务类',
//     details: '新品发布、招商签约',
//   },
//   {
//     id: '03',
//     title: '大型演出类',
//     details: '大型演出、高峰论坛',
//   },
//   {
//     id: '04',
//     title: '文化传播类',
//     details: '周年庆典、文化节庆',
//   },
//   {
//     id: '05',
//     title: '商业美陈类',
//     details: '地产包装、商业美陈',
//   },
//   {
//     id: '06',
//     title: '展览展示类',
//     details: '形象设计、展览展示',
//   },
// ])
</script>

<style lang="scss" scoped>
.home-page2 {
  width: 100%;
  min-height: 100%;
  color: var(--theme-black-color);
  box-sizing: border-box;

  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    // height: 156px;
    min-height: 40%;
    padding: 120px;
    background-color: bisque;

    .list-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 22px;

      .count {
        font-size: 50px;
        color: var(--active-color);
        font-weight: 600;
      }
    }
  }

  .bottom {
    min-height: 60%;
    padding: 120px;
    background-color: purple;
    // background: url('https://static.0551seo.cn/ninety-nine/assets/imgs/lc-bg.jpg')
    //   center center no-repeat;

    .inner {
      display: flex;
      align-items: center;

      .left {
        width: 94%;
      }

      .right {
        width: 6%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .en {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          p {
            writing-mode: vertical-rl;
            font-size: 20px;
            color: rgba($color: #ffffff, $alpha: 0.6);
          }

          .line {
            width: 6px;
            height: 120px;
            background-color: var(--active-color);
          }
        }

        .cn {
          writing-mode: vertical-rl;
          font-size: 30px;
          color: #fff;
          font-weight: 700;
        }
      }
    }
  }
}
</style>

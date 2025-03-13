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
        <div class="left">
          <div class="out">
            <div
              v-for="item in typeOptions"
              :key="item.id"
              :class="['item', item.isFocus ? 'show' : '']"
              @mouseover="itemMouseover(item)"
            >
              <!-- 未hover -->
              <div v-if="!item.isFocus" class="nom">
                <div class="hg"></div>
                <div class="num">
                  <h3>{{ item.id }}</h3>
                  <p>{{ item.title }}</p>
                </div>
                <div class="icon">
                  <el-icon><Grid /></el-icon>
                </div>
              </div>
              <!-- hover -->
              <div v-else class="hover">
                <div class="img">
                  <img :src="item.img" :alt="item.title" />
                </div>
                <div class="intr">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.details }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { Grid } from '@element-plus/icons-vue'
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
// const isFocus = ref(false)
// 公司产品
const typeOptions = ref([
  {
    id: '01',
    title: '庆典活动类',
    details: '文艺晚会、开工奠基',
    img: 'http://static.0551seo.cn/ninety-nine/images/1.jpg',
    isFocus: true,
  },
  {
    id: '02',
    title: '会议服务类',
    details: '新品发布、招商签约',
    img: 'http://static.0551seo.cn/ninety-nine/images/2.jpg',
    isFocus: false,
  },
  {
    id: '03',
    title: '大型演出类',
    details: '大型演出、高峰论坛',
    img: 'http://static.0551seo.cn/ninety-nine/images/3.jpg',
    isFocus: false,
  },
  {
    id: '04',
    title: '文化传播类',
    details: '周年庆典、文化节庆',
    img: 'http://static.0551seo.cn/ninety-nine/images/4.jpg',
    isFocus: false,
  },
  {
    id: '05',
    title: '商业美陈类',
    details: '地产包装、商业美陈',
    img: 'http://static.0551seo.cn/ninety-nine/images/5.jpg',
    isFocus: false,
  },
  {
    id: '06',
    title: '展览展示类',
    details: '形象设计、展览展示',
    img: 'http://static.0551seo.cn/ninety-nine/images/6.jpg',
    isFocus: false,
  },
])
// 鼠标移入事件
const itemMouseover = (item) => {
  typeOptions.value.forEach((item) => {
    item.isFocus = false
  })
  item.isFocus = true
}
</script>

<style lang="scss" scoped>
.home-page2 {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: var(--theme-black-color);

  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 40%;
    padding: 120px;
    box-sizing: border-box;

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
    color: #fff;
    background: url('https://static.0551seo.cn/ninety-nine/assets/imgs/lc-bg.jpg')
      center center no-repeat;
    box-sizing: border-box;

    .inner {
      display: flex;
      align-items: center;

      .left {
        width: 94%;
        height: 286px;

        .out {
          width: 90%;
          margin-right: 10%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .item {
            overflow: hidden;
            border: 4px solid var(--active-color);
            cursor: pointer;
            width: 14%;
            height: 100%;
            transition: 0.3s;
            position: relative;
            background: transparent;

            .nom {
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 1;
              transition: 0.3s;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
              box-sizing: border-box;
              padding: 15px;

              .hg {
                width: 20px;
                height: 4px;
                background: var(--active-color);
              }

              h3 {
                font-size: 46px;
              }

              p {
                font-size: 16px;
                font-weight: 600;
                color: var(--theme-grey-color);
              }
            }

            .hover {
              box-sizing: border-box;
              padding: 15px;
              overflow: hidden;
              position: absolute;
              width: 100%;
              height: 100%;
              transition: 0.3s;

              .img {
                text-align: center;

                img {
                  max-width: 100%;
                  height: auto;
                  vertical-align: middle;
                }
              }

              .intr {
                padding: 20px 0 15px 0;
                text-align: center;

                p {
                  margin-top: 8px;
                  color: rgba($color: #ffffff, $alpha: 0.6);
                }
              }
            }
          }

          .show {
            background: var(--active-color);
            width: 20%;
            transition: 0.3s;
          }
        }
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

          font-weight: 700;
        }
      }
    }
  }
}
</style>

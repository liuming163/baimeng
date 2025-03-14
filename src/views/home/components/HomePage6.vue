<template>
  <div class="home-page6">
    <div class="bg">
      <img
        src="http://static.0551seo.cn/ninety-nine/assets/imgs/xw-bg.jpg"
        alt="bg"
      />
    </div>
    <div class="partners-inner">
      <div class="inner">
        <div class="left">
          <div class="ch">
            <h4>新闻动态</h4>
            <p>新闻资讯 实时更新</p>
          </div>
          <div class="en">
            <p>NEWS</p>
            <div class="line"></div>
          </div>
        </div>
        <div class="right">
          <div class="out">
            <div class="l">
              <img src="" alt="" />
            </div>
            <div class="r">
              <div v-for="item in newsList" :key="item.id" class="item">
                <div class="nom">
                  <div class="t">
                    <h4>{{ item.title }}</h4>
                    <span
                      >{{ item.year }} / {{ item.month }} / {{ item.day }}</span
                    >
                  </div>
                  <div class="b">{{ item.content }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="more">
            <a href="#">查看更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newsList = ref([
  {
    id: 1,
    title: '合肥活动策划的基本准则',
    content:
      '合肥活动策划的基本准则包括以下几点：1. 目标确定：明确活动的目标和目的，确保活动策划与组织的一致性。目标可以是增加品牌知名度、提高销售额、增加客户参与度等。',
    year: '2023',
    month: '08',
    day: '18',
  },
  {
    id: 2,
    title: '安徽商务会议是什么？有什么特点？',
    content:
      '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。商务会议的形式可以是面对面的会议、电话会议、视频会议或在线会议。商务会议对于组织和企业来说非常重要，它可以促进沟通、协调和决策，推动业务发展和合作关系的建立。',
    year: '2023',
    month: '08',
    day: '14',
  },
  {
    id: 3,
    title: '合肥活动策划公司如何选择？',
    content:
      '选择合肥活动策划公司时，可以考虑以下几个因素：经验和行业知识：了解公司的经验和行业知识，包括他们过去的项目经验、成功案例和客户评价。确保他们有能力理解和满足您的需求。',
    year: '2023',
    month: '08',
    day: '06',
  },
])
</script>

<style lang="scss" scoped>
.home-page6 {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex: 1 1 auto;

  .bg {
    position: absolute;
    z-index: -1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .partners-inner {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    .inner {
      margin-top: 7%;
      width: 100%;
      display: flex;

      .left {
        box-sizing: border-box;
        width: 6%;
        min-height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        .ch {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;

          h4 {
            writing-mode: vertical-lr;
            font-size: 30px;
            color: #fff;
            font-weight: 550;
            margin-bottom: 20px;
          }

          p {
            writing-mode: vertical-lr;
            font-size: 20px;
            color: #fff;
          }
        }

        .en {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          p {
            writing-mode: vertical-lr;
            font-size: 20px;
            color: #767676;
          }

          .line {
            box-sizing: border-box;
            width: 5px;
            height: 200px;
            background-color: #a00b00;
            border-radius: 10px;
          }
        }
      }

      .right {
        height: 100%;
        width: 94%;
        box-sizing: border-box;

        .out {
          margin-left: 10%;
          height: 100%;
          display: flex;

          .l {
            flex: 1;
            padding: 10px;
            background: #a00b00;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .r {
            box-sizing: border-box;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .item {
              margin: 2px 0;
              cursor: pointer;
              position: relative;
              width: 90%;
              height: 33.333%;
              border-bottom: 2px solid #808080;
              margin-left: 10%;
              transition: 0.2s;
              display: flex;
              box-sizing: border-box;

              .nom {
                box-sizing: border-box;
                padding-top: 10px;
                width: 100%;
                color: #fff;

                .t {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  box-sizing: border-box;
                  line-height: 42px;

                  h4 {
                    width: 60%;
                    font-size: 22px;
                    font-weight: 550;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }

                  span {
                    font-size: 22px;
                  }
                }

                .b {
                  box-sizing: border-box;
                  font-size: 16px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  line-height: 30px;
                  margin-bottom: 22px;

                  &:hover {
                    color: var(--active-color);
                  }
                }
              }
            }
          }
        }

        .more {
          text-align: end;
          padding-top: 20px;
          box-sizing: border-box;

          a {
            display: inline-block;
            padding: 8px 36px;
            font-size: 24px;
            color: #fff;
            border: 1px solid #fff;
          }
        }
      }
    }
  }
}
</style>

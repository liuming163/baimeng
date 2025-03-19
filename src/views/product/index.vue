<template>
  <div class="product">
    <!-- 新闻动态 -->
    <!-- 页面主体部分 start -->
    <section id="product">
      <div class="container">
        <div class="main">
          <el-row :gutter="24">
            <!-- 左侧栏目 -->
            <el-col :span="6">
              <div class="left">
                <div class="left-top">
                  <div class="left-top-title">
                    <p>
                      <span class="circle"></span>
                      &nbsp;&nbsp;&nbsp;
                      <span>新闻动态</span>
                      &nbsp;&nbsp;&nbsp;
                      <span class="circle"></span>
                    </p>
                  </div>
                </div>
                <div class="left-bottom">
                  <div class="bottom-title">
                    <p class="zh">联系我们</p>
                    <p class="en">contact us</p>
                  </div>
                  <div class="bottom-main">
                    <ul class="info">
                      <li class="item">
                        <el-icon color="#fff" size="20px" class="icon"
                          ><Paperclip
                        /></el-icon>
                        <span>15755173533</span>
                      </li>
                      <li class="item">
                        <el-icon color="#fff" size="20px" class="icon"
                          ><Paperclip
                        /></el-icon>
                        <span>包河区罍街安商1980C座303</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-col>
            <!-- 右侧栏目 -->
            <el-col :span="18">
              <div class="title">
                <div class="right">
                  <el-breadcrumb :separator-icon="DArrowRight">
                    <el-breadcrumb-item :to="{ path: '/' }"
                      >首页</el-breadcrumb-item
                    >
                    <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
                  </el-breadcrumb>
                </div>
              </div>
              <div class="left-title">新闻动态</div>
              <div class="right">
                <div class="prod-con">
                  <div v-for="news in filterList" :key="news.id" class="item">
                    <div class="wrapper">
                      <div class="news-right">
                        <div class="news-title">
                          <p class="big-title">{{ news.title }}</p>
                          <p class="time">{{ news.time }}</p>
                        </div>
                        <p class="news-con">{{ news.news }}</p>
                        <hr class="line" />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 分页 -->
                <div class="pagination-box">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :default-page-size="9"
                    :total="pagination.total"
                    @change="handleCurrentChange"
                  />
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
    <!-- 页面主体部分 end -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Paperclip, DArrowRight } from '@element-plus/icons-vue'

const newsList = ref([
  {
    id: 1,
    title: '安徽商务会议是什么？有什么特点？',
    time: '2023-08-18',
    news: '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。',
  },
  {
    id: 2,
    title: '安徽商务会议是什么？有什么特点？',
    time: '2023-08-18',
    news: '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。',
  },
  {
    id: 3,
    title: '安徽商务会议是什么？有什么特点？',
    time: '2023-08-18',
    news: '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。',
  },
  {
    id: 4,
    title: '安徽商务会议是什么？有什么特点？',
    time: '2023-08-18',
    news: '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。',
  },
  {
    id: 5,
    title: '安徽商务会议是什么？有什么特点？',
    time: '2023-08-18',
    news: '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。',
  },
  {
    id: 6,
    title: '安徽商务会议是什么？有什么特点？',
    time: '2023-08-18',
    news: '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。',
  },
  {
    id: 7,
    title: '安徽商务会议是什么？有什么特点？',
    time: '2023-08-18',
    news: '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。',
  },
  {
    id: 8,
    title: '安徽商务会议是什么？有什么特点？',
    time: '2023-08-18',
    news: '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。',
  },
  {
    id: 9,
    title: '安徽商务会议是什么？有什么特点？',
    time: '2023-08-18',
    news: '商务会议是指为了商业目的而召开的会议。它通常是由企业、组织或团体组织的，旨在讨论和解决与业务相关的问题、制定决策、交流信息、协调合作等。商务会议可以涉及各种主题，如战略规划、市场营销、财务报告、项目管理、团队合作等。',
  },
  {
    id: 10,
    title: '合肥活动策划公司需要做哪些准备',
    time: '2023-08-17',
    news: '活动本身只是一种形式，企业再决定需要做什么性质的活动时，需要根据最初的目的而展开，比如是公关型的活动，还是销售型的活动，亦或者是事件传播类的活动策划，定位决定着后续活动开展的方向。下面小编就来和大家简单说说合肥活动策划公司需要做哪些准备。',
  },
  {
    id: 11,
    title: '合肥活动策划公司需要做哪些准备',
    time: '2023-08-17',
    news: '活动本身只是一种形式，企业再决定需要做什么性质的活动时，需要根据最初的目的而展开，比如是公关型的活动，还是销售型的活动，亦或者是事件传播类的活动策划，定位决定着后续活动开展的方向。下面小编就来和大家简单说说合肥活动策划公司需要做哪些准备。',
  },
  {
    id: 12,
    title: '合肥活动策划公司需要做哪些准备',
    time: '2023-08-17',
    news: '活动本身只是一种形式，企业再决定需要做什么性质的活动时，需要根据最初的目的而展开，比如是公关型的活动，还是销售型的活动，亦或者是事件传播类的活动策划，定位决定着后续活动开展的方向。下面小编就来和大家简单说说合肥活动策划公司需要做哪些准备。',
  },
  {
    id: 13,
    title: '合肥活动策划公司需要做哪些准备',
    time: '2023-08-17',
    news: '活动本身只是一种形式，企业再决定需要做什么性质的活动时，需要根据最初的目的而展开，比如是公关型的活动，还是销售型的活动，亦或者是事件传播类的活动策划，定位决定着后续活动开展的方向。下面小编就来和大家简单说说合肥活动策划公司需要做哪些准备。',
  },
  {
    id: 14,
    title: '合肥活动策划公司需要做哪些准备',
    time: '2023-08-17',
    news: '活动本身只是一种形式，企业再决定需要做什么性质的活动时，需要根据最初的目的而展开，比如是公关型的活动，还是销售型的活动，亦或者是事件传播类的活动策划，定位决定着后续活动开展的方向。下面小编就来和大家简单说说合肥活动策划公司需要做哪些准备。',
  },
])
// 分页区域 start
const pagination = ref({
  currentPage: 1,
  total: newsList.value.length,
})

const filterList = computed(() => {
  return getItemByPage(pagination.value.currentPage)
})

const handleCurrentChange = (page) => {
  setTimeout(() => {
    pagination.value.currentPage = page
  }, 200)
}

const getItemByPage = (pageNum) => {
  const start = (pageNum - 1) * 9 // 开始索引
  const end = start + 9 // 结束索引

  const pageItems = newsList.value.slice(start, end)
  return pageItems
}
// 分页区域 end
</script>

<style lang="scss" scoped>
.product {
  .container {
    max-width: 1140px;
    margin: 0 auto;
    .main {
      box-sizing: border-box;

      .left {
        margin: 70px 0;

        .left-top {
          margin-bottom: 20px;

          .left-top-title {
            box-sizing: border-box;
            background-color: var(--active-color);
            height: 60px;
            border-radius: 20px;
            text-align: center;
            margin-bottom: 15px;

            p {
              font-size: 23px;
              line-height: 60px;
              color: #fff;

              .circle {
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: #fff;
              }
            }
          }
        }

        .left-bottom {
          width: 100%;
          height: 260px;
          border-radius: 20px;
          overflow: hidden;
          box-sizing: border-box;

          .bottom-title {
            box-sizing: border-box;
            background: url('https://static.0551seo.cn/inner-page-template/five/images/concatUs.png')
              repeat-x top;
            padding: 21px 26px;
            width: 100%;
            color: var(--active-color);
            box-shadow: 0 4px 9px 0 rgba(8, 1, 3, 0.35);
            z-index: 2;
            position: relative;

            .zh {
              font-size: 21px;
            }

            .en {
              font-size: 12px;
            }
          }

          .bottom-main {
            box-sizing: border-box;
            width: 100%;
            padding: 32px 26px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            background-color: var(--active-color);

            .info {
              box-sizing: border-box;

              .item {
                margin-bottom: 14px;
                color: #fff;
                font-size: 16px;

                .icon {
                  vertical-align: middle;
                }

                span {
                  margin-left: 8px;
                  line-height: 28px;
                }
              }
            }
          }
        }
      }

      .title {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 80px;
        padding: 34px 0 25px 0;
        border-bottom: 2px solid var(--active-color);
        box-sizing: border-box;

        .right {
          padding: 30px 0;
        }
      }

      .left-title {
        margin-top: 18px;
      }

      .right {
        .prod-con {
          margin-bottom: 50px;

          .item {
            .wrapper {
              display: flex;
              justify-content: center;
              align-items: flex-end;
              cursor: pointer;
              margin-top: 18px;
              box-sizing: border-box;

              .news-right {
                box-sizing: border-box;
                width: 75%;
                height: 100px;
                padding: 18px 0 0 36px;

                .news-title {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  border-left: 7px solid var(--active-color);
                  margin-bottom: 8px;

                  .big-title {
                    font-size: 18px;
                    color: #000;
                    font-weight: 700;
                    width: 60%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-indent: 20px;
                  }
                }

                .news-con {
                  font-size: 15px;
                  color: #969696;
                  margin-bottom: 15px;
                  letter-spacing: 2px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }

                .line {
                  border: 1px dashed #959595;
                }
              }
            }
          }
        }

        .pagination-box {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>

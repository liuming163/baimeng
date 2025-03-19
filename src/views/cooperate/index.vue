<template>
  <div class="cooperate">
    <!-- 关于柏蒙 -->
    <!-- 页面主体部分 start -->
    <section id="cooperate">
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
                      <span>走进丰杨</span>
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
                <div class="right">关于柏蒙</div>
              </div>
              <div class="left-title">合作伙伴</div>
              <div class="right">
                <div class="prod-con">
                  <el-row>
                    <el-col
                      :span="8"
                      v-for="item in filterList"
                      :key="item.id"
                      class="item"
                    >
                      <div class="top">
                        <img :src="item.img" alt="" />
                      </div>
                      <div class="bottom">
                        <p class="name">{{ item.title }}</p>
                      </div>
                    </el-col>
                  </el-row>
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
import { Paperclip } from '@element-plus/icons-vue'

const cooperateList = ref([
  {
    id: 1,
    title: '安徽广播电视台',
    img: 'http://image.veseo.cn/n0165l7n27e90vr4hl',
  },
  {
    id: 2,
    title: '安徽广播电视台',
    img: 'http://image.veseo.cn/n0165l7n27e90vr4hl',
  },
  {
    id: 3,
    title: '安徽广播电视台',
    img: 'http://image.veseo.cn/n0165l7n27e90vr4hl',
  },
  {
    id: 4,
    title: '安徽广播电视台',
    img: 'http://image.veseo.cn/n0165l7n27e90vr4hl',
  },
  {
    id: 5,
    title: '安徽广播电视台',
    img: 'http://image.veseo.cn/n0165l7n27e90vr4hl',
  },
  {
    id: 6,
    title: '安徽广播电视台',
    img: 'http://image.veseo.cn/n0165l7n27e90vr4hl',
  },
  {
    id: 7,
    title: '安徽广播电视台',
    img: 'http://image.veseo.cn/n0165l7n27e90vr4hl',
  },
  {
    id: 8,
    title: '安徽广播电视台',
    img: 'http://image.veseo.cn/n0165l7n27e90vr4hl',
  },
  {
    id: 9,
    title: '安徽广播电视台',
    img: 'http://image.veseo.cn/n0165l7n27e90vr4hl',
  },
  {
    id: 10,
    title: '玄景禅木坊',
    img: 'http://image.veseo.cn/weqg2cy1dz4qmq4ybh',
  },
  {
    id: 11,
    title: '玄景禅木坊',
    img: 'http://image.veseo.cn/weqg2cy1dz4qmq4ybh',
  },
  {
    id: 12,
    title: '玄景禅木坊',
    img: 'http://image.veseo.cn/weqg2cy1dz4qmq4ybh',
  },
  {
    id: 13,
    title: '玄景禅木坊',
    img: 'http://image.veseo.cn/weqg2cy1dz4qmq4ybh',
  },
  {
    id: 14,
    title: '玄景禅木坊',
    img: 'http://image.veseo.cn/weqg2cy1dz4qmq4ybh',
  },
  {
    id: 15,
    title: '玄景禅木坊',
    img: 'http://image.veseo.cn/weqg2cy1dz4qmq4ybh',
  },
  {
    id: 16,
    title: '玄景禅木坊',
    img: 'http://image.veseo.cn/weqg2cy1dz4qmq4ybh',
  },
  {
    id: 17,
    title: '玄景禅木坊',
    img: 'http://image.veseo.cn/weqg2cy1dz4qmq4ybh',
  },
  {
    id: 18,
    title: '玄景禅木坊',
    img: 'http://image.veseo.cn/weqg2cy1dz4qmq4ybh',
  },
])
// 分页区域 start
const pagination = ref({
  currentPage: 1,
  total: cooperateList.value.length,
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

  const pageItems = cooperateList.value.slice(start, end)
  return pageItems
}
// 分页区域 end
</script>

<style lang="scss" scoped>
.cooperate {
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
        margin-top: 20px;

        .prod-con {
          margin-bottom: 50px;

          .item {
            cursor: pointer;
            max-height: 280px;
            padding: 0 10px;

            &:hover {
              color: var(--active-color);
            }

            .top {
              width: 100%;
              overflow: hidden;
              border: 1px solid #e5e5e5;
              box-sizing: border-box;

              img {
                width: 100%;
                height: auto;
                transition: all 0.5s ease;

                &:hover {
                  transform: scale(1.2);
                }
              }
            }

            .bottom {
              text-align: center;
              padding: 18px;
              box-sizing: border-box;
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

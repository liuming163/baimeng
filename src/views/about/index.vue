<template>
  <div class="about">
    <!-- 关于柏蒙 -->
    <!-- 页面主体部分 start -->
    <section id="about">
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
                      <span>关于柏蒙</span>
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
                    <el-breadcrumb-item>关于柏蒙</el-breadcrumb-item>
                  </el-breadcrumb>
                </div>
              </div>
              <div class="left-title">关于柏蒙</div>
              <div class="right">
                <!-- 富文本内容 -->
                <div class="cont">
                  <p>
                    北京柏蒙文化传媒有限公司，是一家专业从事企事业单位大型庆典活动，奠基仪式、地产开盘、开业庆典、开幕仪式、文艺演出、商务酒会、商务促销、展览展示、商业美陈，从策划到现场布置以及灯光设备租用的综合性一站式服务公司，公司本着以经营品牌的理念为客户创造效益。
                  </p>
                  <p>
                    先进的庆典道具为您提供专业的服务，且用我们的专业和我们的诚信服务好每一位顾客。
                  </p>
                  <p>
                    同时竭诚欢迎各地广告、礼仪、演出和展览公司的朋友与我们交流合作！
                  </p>
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
import { Paperclip, DArrowRight } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.about {
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
        padding: 30px 0;

        .cont {
          box-sizing: border-box;

          p {
            font-size: 16px;
            line-height: 30px;
            text-align: justify;
          }
        }
      }
    }
  }
}
</style>

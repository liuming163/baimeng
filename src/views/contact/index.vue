<template>
  <div class="cooperate">
    <!-- 联系我们 -->
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
                      <span>联系我们</span>
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
                        <img
                          src="../../assets/imgs/phone.png"
                          class="icon"
                          alt=""
                        />
                        <span>15755173533</span>
                      </li>
                      <li class="item">
                        <img
                          src="../../assets/imgs/location.png"
                          class="icon"
                          alt=""
                        />
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
                    <el-breadcrumb-item>联系我们</el-breadcrumb-item>
                  </el-breadcrumb>
                </div>
              </div>
              <div class="left-title"></div>
              <div class="right">
                <div class="form-title">北京柏蒙文化传媒有限公司</div>
                <div class="form">
                  <el-row :gutter="40">
                    <el-col :span="12">
                      <div class="form-group">
                        <label for="cantact"
                          >联系人:&nbsp;
                          <span class="start">* </span>
                        </label>
                        <p class="form-control">杨总</p>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="form-group">
                        <label for="tell"
                          >电话:&nbsp;
                          <span class="start">* </span>
                        </label>
                        <p class="form-control">15755173533</p>
                      </div>
                    </el-col>
                    <el-col :span="24">
                      <div class="form-group">
                        <label for="address"
                          >地址:&nbsp;
                          <span class="start">* </span>
                        </label>
                        <p class="form-control">包河区罍街安商1980C座303</p>
                      </div>
                    </el-col>
                  </el-row>
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
import { DArrowRight } from '@element-plus/icons-vue'
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
                  width: 20px;
                  height: 20px;
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
        padding: 20px 0;

        .form-title {
          border-left: 7px solid var(--active-color);
          text-indent: 18px;
          font-size: 18px;
          color: #222;
          margin-top: 18px;
        }

        .form {
          margin-top: 18px;

          .form-group {
            margin-bottom: 16px;

            label {
              display: inline-block;
              margin-bottom: 10px;
              box-sizing: border-box;

              .start {
                color: #ff1414;
                font-size: 12px;
                font-weight: 700;
              }
            }

            .form-control {
              width: 100%;
              display: block;
              height: 24px;
              padding: 6px 12px;
              font-size: 16px;
              line-height: 1.5;
              color: #495057;
              background-color: #fff;
              background-clip: padding-box;
              border: 1px solid #ced4da;
              border-radius: 5px;
              transition: border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;
              box-shadow: 0 1px 6px 0 rgba(8, 1, 2, 0.2);
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>

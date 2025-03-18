<template>
  <footer id="footer">
    <!-- 底部栏 页面 -->
    <div class="bottom-page">
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
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { Paperclip } from '@element-plus/icons-vue'

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
.bottom-page {
  height: 208px;
  margin-top: 36px;

  .bottom {
    position: relative;
    height: 100%;
    background-color: #000;

    .inner {
      max-width: 1140px;
      height: 100%;
      margin: 0 auto;
      padding: 0 20px;
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
      bottom: 30%;
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

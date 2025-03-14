<template>
  <div class="home-page4">
    <div class="bg">
      <img
        src="http://wlcmstest.veseo.cn/static/ninety-nine/assets/imgs/xmzxlc.jpg"
        alt="bg"
      />
    </div>
    <div class="title">
      <p>PROJECT EXECUTION PROCESS</p>
      <h3>项目执行流程</h3>
      <div class="line"></div>
      <div class="det">帮助客户实现更大的经济效益</div>
    </div>
    <div class="inner">
      <div v-for="item in projectList" :key="item.id" class="item">
        <div class="l">
          <h4>{{ item.title }}</h4>
          <p>{{ item.en }}</p>
        </div>
        <div class="r">{{ item.id }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projectList = ref([
  {
    id: '01',
    title: '需求沟通',
    en: 'CONCLUSION',
  },
  {
    id: '02',
    title: '商务面谈',
    en: 'PERFORM',
  },
  {
    id: '03',
    title: '实地勘察',
    en: 'PLANNING',
  },
  {
    id: '04',
    title: '创意构思',
    en: 'DISCUSS',
  },
  {
    id: '05',
    title: '方案讨论',
    en: 'CREATIVE',
  },
  {
    id: '06',
    title: '统筹策划',
    en: 'SURVEY',
  },
  {
    id: '07',
    title: '落地执行',
    en: 'INTERVIEW',
  },
  {
    id: '08',
    title: '活动总结',
    en: 'COMMUNICATION',
  },
])
</script>

<style lang="scss" scoped>
.home-page4 {
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
  }

  .title {
    min-height: 30%;
    font-size: 24px;
    text-align: center;
    color: #ffffff;

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
    box-sizing: border-box;
    margin-top: 6%;
    width: 100%;
    min-height: 64%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      box-sizing: border-box;
      border-top: 3px solid #bfbfbf;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 20%;
      padding: 10px 0 0 0;
      color: #767676;

      &:nth-child(n + 2) {
        margin-left: 2.666%;
      }

      .l {
        h4 {
          font-size: 24px;
          color: #010101;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }

      .r {
        width: 40px;
        height: 40px;
        background-color: #a00b00;
        border-radius: 50%;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        font-family: sans-serif;
        color: #fff;
        font-weight: 550;
      }
    }
  }
}
</style>

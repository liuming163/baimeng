<template>
  <div class="header">
    <div class="content">
      <p class="content-left">北京柏蒙文化传媒有限公司</p>
      <ul class="content-right">
        <li
          v-for="(item, index) in tabList"
          :key="index"
          :class="{ active: activeTab === item.value }"
          @click="tabClick(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
  <!-- 顶部通用轮播图 start -->
  <TopSwiper></TopSwiper>
  <!-- 顶部通用轮播图 end -->
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

import TopSwiper from '@/components/TopSwiper.vue'

// tab栏区域 start
const activeTab = ref('1')
const tabList = ref([
  { label: '首页', value: '1', path: '/' },
  { label: '关于柏蒙', value: '2', path: '/about' },
  { label: '案例展示', value: '3', path: '/product' },
  { label: '合作伙伴', value: '4', path: '/cooperate' },
  { label: '联系我们', value: '5', path: '/contact' },
])
// tab栏点击事件
const tabClick = (val) => {
  const res = tabList.value.find((item) => item.value === val)
  activeTab.value = res.value
  router.push(res.path)
}
// 监听路由变化, 根据路由路径设置activeTab的值
watch(
  route,
  (newRoute) => {
    const tab = tabList.value.find((item) => item.path === newRoute.path)
    if (tab) {
      activeTab.value = tab.value
    } else {
      activeTab.value = '1'
    }
  },
  { immediate: true }
)
// tab栏区域 end
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  max-width: 1140px;
  height: 120px;
  line-height: 60px;
  margin: 0 auto;

  .content {
    display: flex;
    align-items: center;
    padding: 30px 0;
    color: var(--theme-grey-color);

    .content-left {
      //   max-width: 360px;
      width: 35%;
      font-size: 30px;
      font-weight: 700;
    }

    .content-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      li {
        cursor: pointer;

        font-size: 15px;
        // margin-left: 40px;
        padding: 0 20px;

        &:hover {
          color: var(--active-color);
          font-weight: 700;
        }
      }

      .active {
        color: var(--active-color);
        font-weight: 700;
        background-color: #ccc;
        border-radius: 10px;
      }
    }
  }
}
</style>

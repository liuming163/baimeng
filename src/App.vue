<template>
  <div class="app">
    <!-- 首页 -->
    <div v-if="isHomePage">
      <HeaderFixed class="header-fixed"></HeaderFixed>
      <router-view></router-view>
    </div>
    <!-- 其他页面 -->
    <div v-else>
      <Header></Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import HeaderFixed from '@/components/HeaderFixed.vue'
import Header from '@/components/Header.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const isHomePage = ref(true) // 是否是首页
// 监听路由变化, 根据路由路径设置activeTab的值
watch(route, (newRoute) => {
  isHomePage.value = newRoute.path === '/home' ? true : false
})
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';

.app {
  position: relative;

  .header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
}
</style>

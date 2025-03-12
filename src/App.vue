<template>
  <div>
    <button @click="$router.push('/home')">home</button>
    <button @click="$router.push('/about')">about</button>
    <el-button type="primary">按钮测试</el-button>
  </div>

  <router-view></router-view>
</template>

<script setup>

import { useUserStore  } from '@/store';

const userStore = useUserStore()

console.log('userStore', userStore);
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';
</style>

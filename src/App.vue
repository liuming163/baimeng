<template>
  <div class="app">
    <Header class="header"></Header>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';

.app {
  position: relative;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
}
</style>

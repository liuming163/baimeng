<template>
  <div>
    <Header></Header>
  </div>

  <router-view></router-view>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';
</style>

<template>
  <div class="home-page3">
    <div class="title">
      <p>CASE RECOMMENDED</p>
      <h3>案例展示</h3>
      <div class="line"></div>
      <div class="det">
        无论是创意、设计、还是体验，我们都力求颠覆传统，在每一个细节中做到完美极致！
      </div>
    </div>
    <div class="inner"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home-page3 {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 120px;

  .title {
    min-height: 30%;
    font-size: 24px;
    text-align: center;
    // background-color: purple;
    color: #767676;

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
      color: #000;
      margin-top: 40px;
    }
  }

  .inner {
    width: 100%;
    height: 60%;
    margin-top: 4%;
  }
}
</style>

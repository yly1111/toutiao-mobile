<template>
  <div id="app">
      <!-- 路由的出口 -->
      <router-view></router-view>
      <h1>今日头条</h1>
      <div>
        <i class="toutiao toutiao-sousuo"></i>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
 
</style>

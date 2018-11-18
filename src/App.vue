<template>
  <div id="app">
    <!-- 欢迎页面 -->
    <soul-welcome></soul-welcome>

    <!-- 显示内容 -->
    <keep-alive>
      <router-view/>
    </keep-alive>

    <!-- 底部导航栏 -->
    <soul-nav></soul-nav>
  </div>
</template>

<script>
import SoulWelcome from './components/common/SoulWelcome'
import SoulNav from './components/common/SoulNav'
export default {
  name: 'App',
  components: {
    SoulWelcome,
    SoulNav
  }
}
</script>

<style>
  /*引入基础样式*/
  @import "./assets/css/reset.css";

  /*引入CSS变量*/
  @import "./assets/css/variables.css"
</style>

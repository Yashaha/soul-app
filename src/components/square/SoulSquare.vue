<template>
  <div>
    <!-- 头部 -->
    <soul-square-header></soul-square-header>

    <!-- 内容 -->
    <soul-square-content></soul-square-content>
  </div>
</template>

<script>
import SoulSquareHeader from './components/Header'
import SoulSquareContent from './components/Content'
export default {
  name: 'SoulSquare',
  components: {
    SoulSquareHeader,
    SoulSquareContent
  }
}
</script>

<style>
</style>

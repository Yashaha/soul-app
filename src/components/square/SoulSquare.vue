<template>
  <div>
    <soul-square-header :moveClientY="this.moveClientY"></soul-square-header>
    <soul-square-content @touchChange="handleTouchChange"></soul-square-content>
  </div>
</template>

<script>
import SoulSquareHeader from './components/Header'
import SoulSquareContent from './components/content'
export default {
  name: 'SoulSquare',
  components: {
    SoulSquareHeader,
    SoulSquareContent
  },
  data () {
    return {
      moveClientY: 0 // content组件的Y轴滑动距离
    }
  },
  methods: {
    // 滑动内容栏时触发此函数，m为Y轴滑动距离，负数为向上滑动，正数为向下滑动
    handleTouchChange (m) {
      this.moveClientY = m
    }
  }
}
</script>

<style>
</style>

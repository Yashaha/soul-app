<template>
  <div>
    <!-- 头部 -->
    <soul-square-header
      :contentIndex="this.contentIndex"
      :movingEvent="this.movingEvent"
    ></soul-square-header>

    <!-- 内容 -->
    <soul-square-content
      @contentIndexChange="handleContentIndexChange"
      @touchChange="handleTouchChange"
    ></soul-square-content>
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
  },
  data () {
    return {
      contentIndex: 1,
      movingEvent: {
        direction: 0, // 滑动方向，-1为下滑，1为上滑
        topY: 0 // content组件顶部滑动距离
      } // content滑动事件
    }
  },
  methods: {
    // content中的swiper改变
    handleContentIndexChange (index) {
      this.contentIndex = index
    },
    // 滑动内容栏时触发此函数，m为Y轴滑动方向，负数为向下滑动，正数为向上滑动
    handleTouchChange (m) {
      this.movingEvent = m
    }
  }
}
</script>

<style>
</style>

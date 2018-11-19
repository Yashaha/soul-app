<template>
  <div>
    <!-- 头部 -->
    <soul-square-header
      :contentIndex="this.contentIndex"
      :moveClientY="this.moveClientY"
    >
    </soul-square-header>

    <!-- 搜索框 -->
    <soul-square-search :moveClientY="this.moveClientY"></soul-square-search>

    <!-- 内容 -->
    <soul-square-content
      @contentIndexChange="handleContentIndexChange"
      @touchChange="handleTouchChange"
    >
      <div style="height: 1000px" slot="follow">关注</div>
      <div style="height: 1000px" slot="recommend">推荐</div>
      <div style="height: 1000px" slot="newest">最新</div>
    </soul-square-content>
  </div>
</template>

<script>
import SoulSquareHeader from './components/Header'
import SoulSquareSearch from './components/Search'
import SoulSquareContent from './components/Content'
export default {
  name: 'SoulSquare',
  components: {
    SoulSquareHeader,
    SoulSquareSearch,
    SoulSquareContent
  },
  data () {
    return {
      contentIndex: 1,
      moveClientY: 0 // content组件的Y轴滑动距离
    }
  },
  methods: {
    // content中的swiper改变
    handleContentIndexChange (index) {
      this.contentIndex = index
    },
    // 滑动内容栏时触发此函数，m为Y轴滑动距离，负数为向上滑动，正数为向下滑动
    handleTouchChange (m) {
      this.moveClientY = m
    }
  }
}
</script>

<style>
</style>

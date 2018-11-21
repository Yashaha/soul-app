<template>
  <div>
    <!-- 头部 -->
    <soul-square-header
      :contentIndex="this.contentIndex"
      :movingEvent="this.movingEvent"
    >
    </soul-square-header>

    <!-- 内容 -->
    <soul-square-content
      @contentIndexChange="handleContentIndexChange"
      @touchChange="handleTouchChange"
    >
      <div slot="follow">
        <!-- 搜索框 -->
        <soul-square-search></soul-square-search>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
      </div>
      <div slot="recommend">
        <!-- 搜索框 -->
        <soul-square-search></soul-square-search>
        <soul-cell-item :options="cellItemOption1"></soul-cell-item>
        <soul-cell-item :options="cellItemOption2"></soul-cell-item>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
      </div>
      <div slot="newest">
        <!-- 搜索框 -->
        <soul-square-search></soul-square-search>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
        <soul-cell-item></soul-cell-item>
      </div>
    </soul-square-content>
  </div>
</template>

<script>
import SoulSquareHeader from './components/Header'
import SoulSquareSearch from './components/Search'
import SoulSquareContent from './components/Content'
import SoulCellItem from '../common/SoulCellItem'
export default {
  name: 'SoulSquare',
  components: {
    SoulSquareHeader,
    SoulSquareSearch,
    SoulSquareContent,
    SoulCellItem
  },
  data () {
    return {
      contentIndex: 1,
      movingEvent: {
        direction: 0, // 滑动方向，-1为下滑，1为上滑
        topY: 0 // content组件顶部滑动距离
      }, // content滑动事件
      cellItemOption1: {
        icon: 0, // 头像，不同数字对应不同头像
        nickName: '#来自艺术家星球',
        timeStamp: '2分钟前',
        imgs: {
          url: [
            './static/photo1.jpg',
            './static/photo1.jpg',
            './static/photo1.jpg'
          ],
          count: 3
        },
        word: `什么时候去台湾旅游`,
        topic: ' ',
        location: ' '
      },
      cellItemOption2: {
        icon: 0, // 头像，不同数字对应不同头像
        nickName: '#来自温润多面手星球',
        timeStamp: '5分钟前',
        imgs: {
          url: [
            './static/photo1.jpg',
            './static/photo1.jpg',
            './static/photo1.jpg',
            './static/photo1.jpg'
          ],
          count: 4
        },
        word: `我开始美丽的际遇 你来自东或西 都没有太大的关系 都听你 因为始终和你前进 回忆并肩旅行 我愿意陪着你去东和西`,
        topic: '#吃鸡，落地成盒',
        location: '伊拉克'
      }
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

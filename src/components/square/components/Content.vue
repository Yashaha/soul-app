<template>
  <div
    class="soul-square-content"
    @touchmove="handleTouchMove"
  >
    <swiper
      :options="swiperOption"
      ref="soulSquareContentSwiper"
    >
      <swiper-slide class="swiper-follow" :style="styleObject"><slot name="follow"></slot></swiper-slide>
      <swiper-slide class="swiper-recommend" :style="styleObject"><slot name="recommend"></slot></swiper-slide>
      <swiper-slide class="swiper-newest" :style="styleObject"><slot name="newest"></slot></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'SoulSquareContent',
  data () {
    const that = this
    return {
      timerTouchMove: null, // 节流器
      contentIndex: 1, // 当前swiper的index值
      bScrollFollow: '', // Bscroll不直接使用let定义，否则浏览器会出现定义了没使用的警告
      bScrollRecommend: '',
      bScrollNewest: '',
      movingEvent: {
        direction: 0, // 滑动方向，-1为下滑，1为上滑
        topY: 0 // content组件顶部滑动距离
      },
      styleObject: {
        overflow: 'scroll',
        height: (window.innerHeight - 50) + 'px'
      }, // 给slide定义高度，才不会滑动一个slide导致另一个slide也跟着滑动，1.85*50是header和search的总高度
      swiperOption: {
        resistanceRatio: 0, // swiper到达边缘不能继续滑动
        on: {
          // 获取当前swiper的index值
          slideChangeTransitionStart: function () {
            that.contentIndex = this.activeIndex
          }
        }
      } // Swiper设置
    }
  },
  computed: {
    // 使用swiper必须要写的
    swiper () {
      return this.$refs.soulSquareContentSwiper.swiper
    }
  },
  watch: {
    // 不要用箭头函数，否则不能操作data
    // swiper的index值发生改变，触发事件，并返回新的index值
    contentIndex: function (newValue) {
      this.$emit('contentIndexChange', newValue)
    }
  },
  mounted () {
    this.swiper.slideTo(1) // 切换到‘推荐’页面
    // 绑定Better-Scroll，必须设置了probeType才能监测scroll事件
    this.bScrollFollow = new BScroll('.swiper-follow', {click: true, tap: true, probeType: 2})
    this.bScrollRecommend = new BScroll('.swiper-recommend', {click: true, tap: true, probeType: 2})
    this.bScrollNewest = new BScroll('.swiper-newest', {click: true, tap: true, probeType: 2})

    // 给每个swiper绑定scroll事件
    this.bScrollFollow.on('scroll', () => {
      this.movingEvent.direction = this.bScrollFollow.movingDirectionY
      this.movingEvent.topY = this.bScrollFollow.y
    })
    this.bScrollRecommend.on('scroll', () => {
      this.movingEvent.direction = this.bScrollRecommend.movingDirectionY
      this.movingEvent.topY = this.bScrollRecommend.y
    })
    this.bScrollNewest.on('scroll', () => {
      this.movingEvent.direction = this.bScrollNewest.movingDirectionY
      this.movingEvent.topY = this.bScrollNewest.y
    })
  },
  methods: {
    handleTouchMove (e) {
      // 函数节流，提高性能
      if (this.timerTouchMove) {
        clearTimeout(this.timerTouchMove)
      }
      // 检测触碰滑动距离，用于隐藏header和修改content的margin-top值
      this.timerTouchMove = setTimeout(() => {
        this.$emit('touchChange', this.movingEvent) // 向父组件传递touchChange事件，携带movingEvent的值
      }, 16)
    }
  }
}
</script>

<style>
.soul-square-content {
  position: relative;
  transition: 0.5s;
  z-index: var(--content);
}
</style>

<template>
  <div
    class="soul-square-content"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <swiper
      :options="swiperOption"
      ref="soulSquareContentSwiper"
    >
      <swiper-slide><slot name="follow"></slot></swiper-slide>
      <swiper-slide><slot name="recommend"></slot></swiper-slide>
      <swiper-slide><slot name="newest"></slot></swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'SoulSquareContent',
  data () {
    const that = this
    return {
      preClientY: 0, // 上次触碰的Y值
      currentClientY: 0, // 当前触碰的Y值
      moveClientY: 0, // Y轴移动的距离
      timerTouchMove: null, // 节流器
      contentIndex: 1, // 当前swiper的index值
      swiperOption: {
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
  },
  methods: {
    handleTouchStart (e) {
      this.preClientY = e.touches[0].clientY
    },
    handleTouchMove (e) {
      // 函数节流，提高性能
      if (this.timerTouchMove) {
        clearTimeout(this.timerTouchMove)
      }
      // 检测触碰滑动距离，用于隐藏header和修改content的margin-top值
      this.timerTouchMove = setTimeout(() => {
        this.currentClientY = e.touches[0].clientY // 当前触碰的Y值
        this.moveClientY = this.currentClientY - this.preClientY // 更新Y轴移动距离
        this.preClientY = this.currentClientY // 下次执行的时候，preClientY变成当前的currentClientY
        this.$emit('touchChange', this.moveClientY) // 向父组件传递touchChange事件，携带moveClientY的值
      }, 16)
    },
    handleTouchEnd (e) {
      // 防止有未完成的timer继续执行
      if (this.timerTouchMove) {
        clearTimeout(this.timerTouchMove)
      }
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

<!-- 该组件在SoulBaseHeader基础上增加了：
  1.自动隐藏功能
  2.三个slider切换
 -->
<template>
  <!-- 头部 -->
  <soul-base-header
    class="soul-square-header"
    :class="{'soul-square-header-hide': isHide}"
  >
    <template slot="left">照相机</template>
    <template slot="center">
      <div class="soul-square-header-center">
        <span :class="{'soul-square-header-enabled': isFollowEnabled}">关注</span>
        <span :class="{'soul-square-header-enabled': isRecommendEnabled}">推荐</span>
        <span :class="{'soul-square-header-enabled': isNewestEnabled}">最新</span>
      </div>
    </template>
    <template slot="right">随机音</template>
  </soul-base-header>

  <!-- 滚动条 -->
  <!-- 考虑用vuex做双向控制swiper，暂时先放下 -->
</template>

<script>
import SoulBaseHeader from '@/components/common/SoulBaseHeader'
export default {
  name: 'SoulSquareHeader',
  components: {
    SoulBaseHeader
  },
  props: {
    // swiper的index值，用于判断是否使字体变成黑色
    contentIndex: {
      type: [Number],
      default: 1
    },
    // 检测滑动距离，小于0出现；大于0隐藏
    movingEvent: {
      type: [Object],
      default: () => {
        return {
          direction: 0, // 滑动方向，-1为下滑，1为上滑
          topY: 0 // content组件顶部滑动距离
        }
      }
    }
  },
  data () {
    return {
      isHide: false // 判断header是否隐藏
    }
  },
  computed: {
    isFollowEnabled: {
      get: function () {
        return (this.contentIndex === 0)
      }
    }, // 判断'关注'是否选中
    isRecommendEnabled: {
      get: function () {
        return (this.contentIndex === 1)
      }
    }, // 判断'推荐'是否选中
    isNewestEnabled: {
      get: function () {
        return (this.contentIndex === 2)
      }
    } // 判断'最新'是否选中
  },
  watch: {
    // 不要用箭头函数，否则不能操作data，对象要使用深度监听
    movingEvent: {
      handler: function (newValue) {
        if (newValue.topY < -50) {
          this.isHide = (newValue.direction > 0)
        }
      },
      deep: true
    },
    contentIndex: function () {
      this.isHide = false // 切换栏目的时候也要显示header
    }
  }
}
</script>

<style>
.soul-square-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: var(--font-color-disabled, #A6A6A6);
  z-index: var(--content, 0);
}
.soul-square-header-hide {
  top: -1.02rem;
}
.soul-square-header-center {
  display: flex;
  justify-content: space-between;
}
.soul-square-header-center span {
  width: 0.95rem;
  text-align: center;
}
.soul-square-header-enabled {
  color: var(--font-color-enabled, #000);
}
</style>

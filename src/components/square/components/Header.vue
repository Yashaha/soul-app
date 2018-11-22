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
        <span
          @click="handleClickFollow"
          :class="{'soul-square-header-enabled': isFollowEnabled}"
        >
          关注
        </span>
        <span
          @click="handleClickRecommend"
          :class="{'soul-square-header-enabled': isRecommendEnabled}"
        >
          推荐
        </span>
        <span
          @click="handleClickNewest"
          :class="{'soul-square-header-enabled': isNewestEnabled}"
        >
          最新
        </span>
      </div>
    </template>
    <template slot="right">随机音</template>
  </soul-base-header>

  <!-- 滚动条 -->
  <!-- 考虑用vuex做双向控制swiper，暂时先放下 -->
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SoulBaseHeader from '@/components/common/SoulBaseHeader'
export default {
  name: 'SoulSquareHeader',
  components: {
    SoulBaseHeader
  },
  data () {
    return {
      isHide: false // 判断header是否隐藏
    }
  },
  computed: {
    isFollowEnabled: {
      get: function () {
        return (this.soulSquare.contentIndex === 0)
      }
    }, // 判断'关注'是否选中
    isRecommendEnabled: {
      get: function () {
        return (this.soulSquare.contentIndex === 1)
      }
    }, // 判断'推荐'是否选中
    isNewestEnabled: {
      get: function () {
        return (this.soulSquare.contentIndex === 2)
      }
    }, // 判断'最新'是否选中
    ...mapState(['soulSquare'])
  },
  watch: {
    // 不要用箭头函数，否则不能操作data，对象要使用深度监听
    'soulSquare.movingEvent': {
      handler: function (newValue) {
        if (newValue.topY < -50) {
          this.isHide = (newValue.direction > 0)
        }
      },
      deep: true
    },
    'soulSquare.contentIndex': function (newValue) {
      this.isHide = false
    }
  },
  methods: {
    handleClickFollow () {
      this.changeSoulSquareContentIndex(0) // 切换到关注页面
    },
    handleClickRecommend () {
      this.changeSoulSquareContentIndex(1) // 切换到推荐页面
    },
    handleClickNewest () {
      this.changeSoulSquareContentIndex(2) // 切换到最新页面
    },
    ...mapMutations([
      'changeSoulSquare',
      'changeSoulSquareContentIndex'
    ])
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

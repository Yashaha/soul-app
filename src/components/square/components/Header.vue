<!-- 该组件在SoulBaseHeader基础上增加了自动隐藏功能 -->
<template>
    <soul-base-header
      class="soul-square-header"
      :class="{'soul-square-header-hide': isHide}"
    >
      <template slot="left">照相机</template>
      <template slot="center">关注推荐最新</template>
      <template slot="right">随机音乐</template>
    </soul-base-header>
</template>

<script>
import SoulBaseHeader from '@/components/common/SoulBaseHeader'
export default {
  name: 'SoulSquareHeader',
  components: {
    SoulBaseHeader
  },
  props: {
    // 检测触碰滑动距离，小于0隐藏；大于0出现
    moveClientY: {
      type: [Number],
      default: 0
    }
  },
  data () {
    return {
      isHide: false
    }
  },
  watch: {
    // 不要用箭头函数，否则不能操作data
    moveClientY: function (newValue, oldValue) {
      this.isHide = (this.moveClientY < 0)
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
  z-index: var(--header);
}
.soul-square-header-hide {
  top: -1.02rem;
}
</style>

<template>
  <div
      class="soul-square-search"
      :class="{'soul-square-search-hide': isHide}"
  >
    <i class="soul-square-search-icon">图标</i>
    <input class="soul-square-search-input" type="text" placeholder="搜索">
  </div>
</template>

<script>
export default {
  name: 'SoulSquareSearch',
  props: {
    // 检测触碰滑动距离，小于0隐藏；大于0出现
    moveClientY: {
      type: [Number],
      default: 0
    }
  },
  data () {
    return {
      isHide: false // 判断search是否收起
    }
  },
  watch: {
    // 不要用箭头函数，否则不能操作data
    moveClientY: function () {
      this.isHide = (this.moveClientY < 0)
    }
  }
}
</script>

<style>
.soul-square-search {
  background-color: var(--soul-background--color-search, #F6F6F6);
  display: flex;
  height: 0.55rem;
  margin-top: 1rem;
  margin-bottom: 0.04rem;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  transition: 0.5s;
}
.soul-square-search-icon {
  width: 10%;
  height: 0.55rem;
  line-height: 0.55rem;
  text-align: center;
  background-color: #fff;
  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}
.soul-square-search-input {
  width: 90%;
  height: 0.55rem;
  background-color: #fff;
  border-top-right-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
}
.soul-square-search-hide {
  margin-top: 0;
}
</style>

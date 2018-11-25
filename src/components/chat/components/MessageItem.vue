<template>
  <div class="message-item">
    <div
      class="message-item-info"
      :style="styleObject"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="message-item-info-headicon">头像</div>
      <div class="message-item-info-detail">昵称 soulmate 消息预览</div>
      <div class="message-item-info-date">日期</div>
    </div>
    <div class="message-item-operate" style="background-color: #26D4D0; color: #fff"><span>更多</span></div>
    <div class="message-item-operate" style="background-color: #26D4D0; color: #fff"><span>置顶</span></div>
    <div class="message-item-operate" style="background-color: #FFE346; color: #fff"><span>删除</span></div>
  </div>
</template>

<script>
export default {
  name: 'SoulChatMessageItem',
  data () {
    return {
      transitionTime: 0,
      marginLeft: 0,
      touches: '',
      startTx: '',
      endTx: '',
      distanceX: '',
      startMarginLeft: 0
    }
  },
  computed: {
    styleObject: function () {
      return {
        transition: this.transitionTime + 's',
        marginLeft: this.marginLeft + 'px'
      }
    }
  },
  methods: {
    handleTouchStart (e) {
      this.touches = e.touches[0]
      this.startTx = this.touches.clientX
      this.startMarginLeft = this.marginLeft
    },
    handleTouchMove (e) {
      this.touches = e.changedTouches[0]
      this.endTx = this.touches.clientX
      this.distanceX = this.startTx - this.endTx
      if (this.distanceX < 0) { // 右滑
        e.preventDefault()
        this.transitionTime = 0
        this.marginLeft = this.startMarginLeft - this.distanceX
      } else { // 左滑
        e.preventDefault()
        this.transitionTime = 0
        this.marginLeft = this.startMarginLeft - this.distanceX
      }
    },
    handleTouchEnd (e) {
      if (this.marginLeft > -100) {
        this.transitionTime = 0.4
        this.marginLeft = 0
      } else {
        this.transitionTime = 0.4
        this.marginLeft = -225
      }
    }
  }
}
</script>

<style>
.message-item {
  display: flex;
  justify-content: flex-end; /* 不知为何加了这个属性就能阻止左右滑动出现空白了 */
  width: 100%;
  height: 1.5rem;
  margin-left: 0;
  border-bottom: 1px solid #ccc;
}
.message-item-info {
  width: 100%;
  background-color: #fff;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.message-item-info-headicon {

}
.message-item-info-detail {

}
.message-item-info-date {

}
.message-item-operate {
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.message-item-operate span {
  width: 0;
  font-size: 0.38rem;
  white-space: nowrap;
  margin-left: -50%; /* 要用百分比，不要用数值，因为不能让固定值撑出宽度，才能实现字体隐藏*/
}
</style>

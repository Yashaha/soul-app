<template>
  <div class="message-item">
    <div
      class="message-item-info"
      :style="styleObject"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="message-item-info-headicon">
        <img src="@/assets/images/headicon/0.png">
        <div><span>来自星球</span></div>
      </div>
      <div class="message-item-info-detail">
        <div>昵称</div>
        <div style="color: #A6A6A6; font-size: 0.26rem;">消息预览</div>
      </div>
      <div class="message-item-info-date">
        <div><span>11-26 00:35</span></div>
      </div>
    </div>
    <div class="message-item-operate" style="background-color: #26D4D0; color: #fff"><span>更多</span></div>
    <div class="message-item-operate" style="background-color: #26D4D0; color: #fff"><span>置顶</span></div>
    <div class="message-item-operate" style="background-color: #FFE346; color: #fff"><span>删除</span></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'SoulChatMessageItem',
  data () {
    return {
      isAllowMove: true, // 判断是否允许滑动
      isSpreadOperate_local: false, // 当前侧滑菜单是否展开
      transitionTime: 0,
      marginLeft: 0,
      touches: '',
      startTx: '',
      endTx: '',
      startTy: '',
      endTy: '',
      distanceX: '',
      distanceY: '',
      startMarginLeft: 0
    }
  },
  computed: {
    styleObject: function () {
      return {
        transition: this.transitionTime + 's',
        marginLeft: this.marginLeft + 'px'
      }
    },
    ...mapState(['soulChat'])
  },
  watch: {
    // 当全局侧滑菜单设置为关闭的时候，自动关闭当前的侧滑菜单
    'soulChat.isSpreadOperate_gobal': function (newValue) {
      if (!newValue) {
        this.isSpreadOperate_local = false
        this.transitionTime = 0.4
        this.marginLeft = 0
      }
    }
  },
  methods: {
    handleTouchStart (e) {
      // 记录第一次按下的时候，如果其他消息框的侧滑菜单展开了，就不允许滑动，并且将展开的侧滑菜单关闭
      this.isAllowMove = (this.isSpreadOperate_local === this.soulChat.isSpreadOperate_gobal)
      if (this.isAllowMove) {
        this.touches = e.touches[0]
        this.startTx = this.touches.clientX
        this.startTy = this.touches.clientY
        this.startMarginLeft = this.marginLeft
      } else {
        // 关闭其他展开的侧滑菜单
        this.changeSoulChatIsSpreadOperate(false)
      }
    },
    handleTouchMove (e) {
      if (this.isAllowMove) {
        this.touches = e.changedTouches[0]
        this.endTx = this.touches.clientX
        this.endTy = this.touches.clientY
        this.distanceX = this.startTx - this.endTx
        this.distanceY = this.startTy - this.endTy
        if (Math.abs(this.distanceX) > Math.abs(this.distanceY)) { // 判断是上下滑动还是左右滑动
          if (this.distanceX < 0) { // 右滑
            this.transitionTime = 0
            this.marginLeft = this.startMarginLeft - this.distanceX
          } else { // 左滑
            this.transitionTime = 0
            this.marginLeft = this.startMarginLeft - this.distanceX
          }
        } else {
          // 上下滑动的时候就关闭侧滑菜单，同时不允许滑动
          this.transitionTime = 0.4
          this.marginLeft = 0
          this.isAllowMove = false
        }
      }
    },
    handleTouchEnd (e) {
      if (this.marginLeft > -100) {
        this.isSpreadOperate_local = false
        this.changeSoulChatIsSpreadOperate(false)
        this.transitionTime = 0.4
        this.marginLeft = 0
      } else {
        this.isSpreadOperate_local = true
        this.changeSoulChatIsSpreadOperate(true)
        this.transitionTime = 0.4
        this.marginLeft = -225
      }
    },
    ...mapMutations(['changeSoulChatIsSpreadOperate'])
  }
}
</script>

<style>
.message-item {
  display: flex;
  justify-content: flex-end; /* 不知为何加了这个属性就能阻止左右滑动出现空白了 */
  width: 100%;
  height: 1.5rem;
}

/* 头像 */
.message-item-info {
  width: 100%;
  height: 1.5rem;
  background-color: #fff;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.message-item-info-headicon {
  position: relative;
  flex-shrink: 0;
  padding: 0 0.25rem 0 0.25rem;
}
.message-item-info-headicon img {
  width: 1rem;
  height: 1rem;
}
.message-item-info-headicon div {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 0.25rem;
  margin-top: -12px;
  color: #fff;
  background-color: #26D4D0;
  border-radius: 4px;
}
.message-item-info-headicon span {
  font-size: 0.2rem;
}

/* 信息详情 */
.message-item-info-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 1.48rem;
  border-bottom: 0.02rem solid #ccc;
}
.message-item-info-detail div {
  padding: 0.1rem 0 0.1rem 0;
}

/* 日期 */
.message-item-info-date {
  display: flex;
  align-items: center;
  height: 1.48rem;
  flex-shrink: 0;
  padding-right: 0.25rem;
  border-bottom: 0.02rem solid #ccc;
}
.message-item-info-date div {
  padding-bottom: 0.5rem;
  color: #A6A6A6;
  font-size: 0.26rem;
}

/* 操作栏（侧滑菜单） */
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

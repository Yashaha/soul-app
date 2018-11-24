<template>
  <div class="message-item">
    <div class="message-item-info" v-swiper>
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
  directives: { // 自定义事件用于消息框侧滑菜单
    swiper: {
      bind: function (el, binding) {
        var touches, startTx, endTx, distanceX, startMarginLeft
        el.addEventListener('touchstart', function (e) {
          touches = e.touches[0]
          startTx = touches.clientX
          startMarginLeft = parseInt(el.style.marginLeft)
        }, false)
        el.addEventListener('touchmove', function (e) {
          touches = e.changedTouches[0]
          endTx = touches.clientX
          distanceX = startTx - endTx
          if (distanceX < 0) { // 右滑
            el.style.transition = '0s'
            el.style.marginLeft = startMarginLeft - distanceX + 'px'
          } else { // 左滑
            // e.preventDefault() // 似乎不阻止默认事件也没事
            el.style.transition = '0s'
            el.style.marginLeft = startMarginLeft - distanceX + 'px'
          }
        }, false)
        el.addEventListener('touchend', function (e) {
          if (parseInt(el.style.marginLeft) > -100) {
            el.style.transition = '0.4s'
            el.style.marginLeft = '0px'
          } else {
            el.style.transition = '0.4s'
            el.style.marginLeft = '-225px'
          }
        }, false)
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

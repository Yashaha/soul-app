<!--
  Props:
    fixed  //固定在头部
 -->
<template>
  <header
    class="soul-header"
    :class="{'soul-header-fixed': fixed}"
  >
    <div class="soul-header-left">
      <slot name="left">左边内容</slot>
    </div>
    <div class="soul-header-center">
      <slot name="center">中间内容</slot>
    </div>
    <div class="soul-header-right">
      <slot name="right">右边内容</slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SoulBaseHeader',
  props: {
    // 检测header栏是否固定在头部，只要组件属性写了fixed，就算不传值，props中的fixed值也会变成true。scrollhide同理
    fixed: {
      type: [Boolean],
      default: false
    }
  }
}
</script>

<style>
.soul-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow:
  0rem
  0.05rem
  var(--soul-box-shadow-blur, 0.35rem)
  var(--soul-box-shadow-color, #D6D6D6);
  height: 1rem;
  transition: 0.5s;
  background-color: var(--soul-background-color, #fff);
}
.soul-header-fixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--header);
}
.soul-header-left {

}
.soul-header-center {
  font-size: 0.32rem;
}
.soul-header-right {

}
</style>

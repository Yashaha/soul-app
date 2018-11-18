<template>
  <div class="soul-header">
    <div class="soul-header-left">
      <slot name="left">左边内容</slot>
    </div>
    <div class="soul-header-center">
      <slot name="center">中间内容</slot>
    </div>
    <div class="soul-header-right">
      <slot name="right">右边内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoulHeader'
}
</script>

<style>
.soul-header {
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow:
  0rem
  0.05rem
  var(--soul-box-shadow-blur, 0.35rem)
  var(--soul-box-shadow-color, #D6D6D6);
}
.soul-header-left {

}
.soul-header-center {
  font-size: 0.32rem;
}
.soul-header-right {

}
</style>

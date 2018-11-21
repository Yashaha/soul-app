<template>
  <div>
    <div style="height: 1rem;"><!-- 把搜索框顶出头部高度 --></div>
    <div class="soul-square-search">
      <span class="soul-square-search-icon">图标</span>
      <div class="soul-square-search-input">
        <input class="soul-square-search-input" type="text" placeholder="搜索">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoulSquareSearch'
}
</script>

<style>
.soul-square-search {
  background-color: var(--background-color-search, #F6F6F6);
  display: flex;
  height: 0.65rem;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  transition: 0.5s;
  z-index: var(--content, 0);
}
.soul-square-search-icon {
  width: 10%;
  height: 0.65rem;
  line-height: 0.65rem;
  text-align: center;
  background-color: #fff;
  border-radius: 0.1rem 0 0 0.1rem;
}
.soul-square-search-input {
  width: 90%;
  height: 0.65rem;
  background-color: #fff;
  border-radius: 0 0.1rem 0.1rem 0;
}
</style>

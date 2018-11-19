<template>
  <div class="soul-cell-item">
    <div class="soul-cell-item-header">
      <div class="soul-cell-item-header-icon">头像</div>
      <div class="soul-cell-item-header-detail">
        <h1>昵称</h1>
        <h2>时间戳</h2>
      </div>
    </div>
    <div class="soul-cell-item-content">
      <div class="soul-cell-item-content-image">图片</div>
      <div class="soul-cell-item-content-word">文字</div>
      <div class="soul-cell-item-content-topic">#话题</div>
      <div class="soul-cell-item-content-location">定位</div>
    </div>
    <div class="soul-cell-item-footer">
      收藏 点赞 评论 转发
    </div>
    <div class="soul-cell-item-divide"></div>
  </div>
</template>

<script>
export default {
  name: 'SoulCellItem'
}
</script>

<style>
.soul-cell-item {
  width: 100%;
  background-color: #fff;
}
.soul-cell-item-header {
  display: flex;
}
.soul-cell-item-header-icon {
  width: 1rem;
  height: 1rem;
}
.soul-cell-item-header-detail h1{
  color: var(--soul-font-square-name-color, #26D4D0);
}
.soul-cell-item-header-detail h2{
  color: var(--soul-font-disabled-color, #A6A6A6);
}
.soul-cell-item-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
}
.soul-cell-item-content-image {

}
.soul-cell-item-content-word {

}
.soul-cell-item-footer {
  display: flex;
  padding-left: 1rem;
}
.soul-cell-item-divide {
  width: 100%;
  height: 0.15rem;
  background-color: var(--soul-background-color-cell-divide, #F6F6F6);
}
</style>

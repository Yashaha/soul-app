<template>
  <div class="message-item">
    <div class="message-item-info">
      <div>头像</div>
      <div>展示</div>
    </div>
    <div class="message-item-operate" style="background-color: red"><span>更多</span></div>
    <div class="message-item-operate" style="background-color: green"><span>置顶</span></div>
    <div class="message-item-operate" style="background-color: yellow"><span>删除</span></div>
  </div>
</template>

<script>
export default {
  name: 'SoulChatMessageItem'
}
</script>

<style>
.message-item {
  display: flex;
  width: 100%;
  height: 1.5rem;
}
.message-item-info {
  width: 100%;
  transition: 5s;
  margin-left: -15px;
  background-color: #ccc;
  flex-shrink: 0;
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

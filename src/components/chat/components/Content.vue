<template>
  <div class="message-container" :style="styleObject">
    <div>
      <div style="height: 1rem;"><!-- 把消息框顶出头部区域 --></div>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
      <soul-chat-message-item></soul-chat-message-item>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import SoulChatMessageItem from './MessageItem'
export default {
  name: 'SoulChatContent',
  components: {
    SoulChatMessageItem
  },
  data () {
    return {
      styleObject: {
        height: (window.innerHeight - 50) + 'px'
      } // 给message-container自适应高度，否则弹出发布瞬间页面的时候，这里会跟着动
    }
  },
  methods: {
    initBScroll () {
      this.bScrollMessage = new BScroll('.message-container', {click: true, tap: true})
      this.bScrollMessage.on('scrollStart', () => {
        this.bScrollMessage.refresh()
      })
    }
  },
  mounted () {
    this.initBScroll()
  }
}
</script>

<style>
.message-container {
  overflow: hidden;
}
</style>

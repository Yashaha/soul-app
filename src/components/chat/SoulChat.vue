<template>
  <div>
    <soul-chat-header></soul-chat-header>
    <div class="message-container">
      <div>
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
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import SoulChatHeader from './components/Header'
import SoulChatMessageItem from './components/MessageItem'
export default {
  name: 'SoulChat',
  components: {
    SoulChatHeader,
    SoulChatMessageItem
  },
  data () {
    return {

    }
  },
  methods: {
    initBScroll () {
      this.bScrollMessage = new BScroll('.message-container', {click: true, tap: true})
    }
  },
  mounted () {
    this.initBScroll()
  }
}
</script>

<style>
.message-container {
  /* 上下都有1rem的header和nav栏 */
  position: absolute;
  top: 1rem;
  right: 0;
  bottom: 1rem;
  left: 0;
}
</style>

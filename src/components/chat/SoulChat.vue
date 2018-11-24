<template>
  <div>
    <soul-chat-header></soul-chat-header>
    <div style="height: 1rem;background: #999;"></div>
    <soul-chat-message-item></soul-chat-message-item>
    <soul-chat-message-item></soul-chat-message-item>
    <soul-chat-message-item></soul-chat-message-item>
    <soul-chat-message-item></soul-chat-message-item>
    <soul-chat-message-item></soul-chat-message-item>
    <soul-chat-message-item></soul-chat-message-item>
  </div>
</template>

<script>
import SoulChatHeader from './components/Header'
import SoulChatMessageItem from './components/MessageItem'
export default {
  name: 'SoulChat',
  components: {
    SoulChatHeader,
    SoulChatMessageItem
  }
}
</script>

<style>

</style>

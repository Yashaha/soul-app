<template>
  <div>
    <soul-chat-header></soul-chat-header>
    <soul-chat-content></soul-chat-content>
  </div>
</template>

<script>
import SoulChatHeader from './components/Header'
import SoulChatContent from './components/Content'
export default {
  name: 'SoulChat',
  components: {
    SoulChatHeader,
    SoulChatContent
  }
}
</script>

<style>
</style>

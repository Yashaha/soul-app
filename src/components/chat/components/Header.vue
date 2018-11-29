<template>
  <soul-base-header fixed>
    <template slot="left">
      <div>
        拒绝匹配
        <i>∨</i>
      </div>
    </template>
    <template slot="center">聊天</template>
    <template slot="right">
      <div>
        <i></i>
        关注
      </div>
    </template>
  </soul-base-header>
</template>

<script>
import SoulBaseHeader from '@/components/common/SoulBaseHeader'
export default {
  name: 'SoulChatHeader',
  components: {
    SoulBaseHeader
  }
}
</script>

<style>

</style>

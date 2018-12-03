<template>
  <div>
    <soul-self-header></soul-self-header>
    <soul-self-content></soul-self-content>
  </div>
</template>

<script>
import SoulSelfHeader from './components/Header'
import SoulSelfContent from './components/Content'
export default {
  name: 'SoulSelf',
  components: {
    SoulSelfHeader,
    SoulSelfContent
  }
}
</script>

<style>
</style>

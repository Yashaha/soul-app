<template>
  <div id="app">
    <soul-welcome></soul-welcome>
    <router-view/>
  </div>
</template>

<script>
import SoulWelcome from './components/common/SoulWelcome'
export default {
  name: 'App',
  components: {
    SoulWelcome
  }
}
</script>

<style>
</style>

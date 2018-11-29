<template>
  <transition
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutDown"
  >
    <div class="soul-add" v-show="soulAdd.isShow">
      <soul-add-header></soul-add-header>
      <soul-add-content></soul-add-content>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SoulAddHeader from './components/Header'
import SoulAddContent from './components/Content'
export default {
  name: 'SoulAdd',
  components: {
    SoulAddHeader,
    SoulAddContent
  },
  computed: {
    ...mapState(['soulAdd'])
  },
  methods: {
    ...mapMutations(['changeSoulAddIsShow'])
  }
}
</script>

<style>
.soul-add {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  z-index: var(--popout, 3);
}
</style>

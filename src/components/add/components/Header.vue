<template>
  <div>
    <soul-base-header>
      <template slot="left">
        <div @click="handleClickCancel"><span>取消</span></div>
      </template>
      <template slot="center">记录中</template>
      <span slot="right" style="color: #26D4D0;">发布</span>
    </soul-base-header>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SoulBaseHeader from '@/components/common/SoulBaseHeader'
export default {
  name: 'SoulAddHeader',
  components: {
    SoulBaseHeader
  },
  computed: {
    ...mapState(['soulAdd'])
  },
  methods: {
    handleClickCancel () {
      this.changeSoulAddIsShow(!this.soulAdd.isShow)
    },
    ...mapMutations(['changeSoulAddIsShow'])
  }
}
</script>

<style>
</style>

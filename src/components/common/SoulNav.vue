<template>
    <nav class="soul-nav">
      <!-- 根据vuex中的soulNavCurrent来判断现在选择哪个栏目 -->
      <router-link
        to="/soulstar"
        tag="dl"
        @click.native="changeSoulNavCurrent('soulStar')"
      >
        <dt><img src=""></dt>
        <dd :class="{'soul-nav-current': soulNavCurrent === 'soulStar'}">
          星球
        </dd>
      </router-link>

      <router-link
        to="/soulsquare"
        tag="dl"
        @click.native="changeSoulNavCurrent('soulSquare')"
      >
        <dt><img src=""></dt>
        <dd :class="{'soul-nav-current': soulNavCurrent === 'soulSquare'}">
          广场
        </dd>
      </router-link>

      <dl @click="handleClickAdd">
        <dt>
          <img
            style="width: 1rem; height: 1rem;"
            src="@/assets/images/icon/icon_tabbar_release.png"
          >
        </dt>
        <dd></dd>
      </dl>

      <router-link
        to="/soulchat"
        tag="dl"
        @click.native="changeSoulNavCurrent('soulChat')"
      >
        <dt><img src=""></dt>
        <dd :class="{'soul-nav-current': soulNavCurrent === 'soulChat'}">
          聊天
        </dd>
      </router-link>

      <router-link
        to="/soulself"
        tag="dl"
        @click.native="changeSoulNavCurrent('soulSelf')"
      >
        <dt><img src=""></dt>
        <dd :class="{'soul-nav-current': soulNavCurrent === 'soulSelf'}">
          自己
        </dd>
      </router-link>
    </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'SoulNav',
  computed: {
    ...mapState([
      'soulAdd',
      'soulNavCurrent'
    ])
  },
  methods: {
    handleClickAdd () {
      this.changeSoulAddIsShow(!this.soulAdd.isShow)
    },
    ...mapMutations([
      'changeSoulAddIsShow',
      'changeSoulNavCurrent'
    ])
  }
}
</script>

<style>
.soul-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 1rem;
  background-color: var(--background-color, #fff);
  box-shadow:
  0rem
  -0.05rem
  var(--box-shadow-blur, 0.35rem)
  var(--box-shadow-color, #D6D6D6);
  z-index: var(--nav, 1);
}
nav dl {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
nav dt {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.7rem;
}
nav dd {
  color: var(--font-color-disabled, #A6A6A6);
  line-height: 0.2rem;
  font-size: 0.2rem;
}
.soul-nav-current {
  color: #26D4D0
}
</style>

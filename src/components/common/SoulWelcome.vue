<template>
  <div
    class="soulwelcome"
    :class="{soulwelcomehide: soulwelcomehide}"
  >
    <img src="../../assets/images/photo_soul_logo_black.png">
  </div>
</template>

<script>
export default {
  name: 'SoulWelcome',
  data () {
    return {
      soulwelcomehide: false
    }
  },
  mounted () {
    // transition结合setTimeout函数可以实现animation的动画
    setTimeout(() => {
      this.soulwelcomehide = true
    }, 2000)
  }
}
</script>

<style>
/*
使用flex布局
*/
.soulwelcome {
  position: fixed;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: 0.5s;
}
.soulwelcomehide {
  opacity: 0;
  visibility: hidden;
}
.soulwelcome img {
  margin: 25%;
  width: 50%;
}
</style>

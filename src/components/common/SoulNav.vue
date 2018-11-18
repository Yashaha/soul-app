<template>
    <nav class="soul-nav">
      <router-link to="/soulstar" tag="dl">
        <dt><img src=""></dt>
        <dd>星球</dd>
      </router-link>

      <router-link to="/soulsquare" tag="dl">
        <dt><img src=""></dt>
        <dd>广场</dd>
      </router-link>

      <router-link to="/souladd" tag="dl">
        <dt><img src=""></dt>
        <dd>Add</dd>
      </router-link>

      <router-link to="/soulchat" tag="dl">
        <dt><img src=""></dt>
        <dd>聊天</dd>
      </router-link>

      <router-link to="/soulself" tag="dl">
        <dt><img src=""></dt>
        <dd>自己</dd>
      </router-link>
    </nav>
</template>

<script>
export default {
  name: 'SoulNav'
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
  background-color: var(--soul-background-color, #fff);
  box-shadow:
  0rem
  -0.05rem
  var(--soul-box-shadow-blur, 0.35rem)
  var(--soul-box-shadow-color, #D6D6D6);
  z-index: var(--nav);
}
nav dl {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
nav dt {
  height: 0.7rem;
}
nav dd {
  line-height: 0.2rem;
  font-size: 0.2rem;
}
</style>

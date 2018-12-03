<template>
  <div class="soul-self-item">
    <div class="soul-self-item-left">
      <div class="soul-self-item-line"></div>
      <div class="soul-self-item-sun-background"></div>
      <div class="soul-self-item-sun"></div>
    </div>
    <div class="soul-self-item-right">
      <div class="soul-self-item-bubble">
        <div style="padding: 10px 10px 0 10px;">{{this.itemData.word}}</div>
        <div style="padding: 0 13px 0 10px;">
          <template v-if="itemData.imgs.count != 0"> <!-- 判断是否有图片 -->
              <template v-for="(url, index) in itemData.imgs.url">
                <img
                  :src="url"
                  :preview="itemData.key"
                  :key="index"
                >
              </template>
          </template>
        </div>
        <div style="padding: 10px; color: var(--font-color-disabled, #A6A6A6); font-size: 0.26rem;">{{this.itemData.timeStamp}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoulSelfItem',
  props: {
    itemData: {
      type: [Object],
      default: () => {
        return {
          imgs: {
            url: [],
            count: 0
          }
        }
      },
      required: false
    }
  }
}
</script>

<style>
.soul-self-item {
  display: flex;
  justify-content: center;
  background-color: #F7F8FA; /* 极浅的灰色 */
}

/* 左边 */
.soul-self-item-left {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 10%;
}
/* 灰色线 */
.soul-self-item-line {
  position: absolute;
  bottom: 0;
  top: 0;
  right: 21px;
  width: 2px;
  background-color: #E1E7E9; /* 灰色线 */
}
/* 太阳图标 */
/* 太阳背景遮罩 */
.soul-self-item-sun-background {
  position: absolute;
  right: 10px;
  bottom: 7px;
  width: 23px;
  height: 23px;
  background-color: #F7F8FA; /* 极浅的灰色 */
}
/* 正方形 */
.soul-self-item-sun {
  position: absolute;
  right: 15px;
  bottom: 12px;
  width: 13px;
  height: 13px;
  background-color: #FAE9A8;
}
/* 旋转45°正方形 */
.soul-self-item-sun::before {
  content: '';
  position: absolute;
  width: 13px;
  height: 13px;
  transform: rotate(45deg);
  background-color: #FAE9A8;
}
/* 中部圆形 */
.soul-self-item-sun::after {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 11px;
  background-color: #FFC92C;
}

/* 右边 */
.soul-self-item-right {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  padding: 15px 0 5px 0;
  width: 82%;
}
/* 气泡 */
.soul-self-item-bubble {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 6px;
  background-color: #fff;
}
/* 三角形 */
.soul-self-item-bubble::before {
  content: '';
  position: absolute;
  left: -5px;
  bottom: 10px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #fff;
}
.soul-self-item-bubble img {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 10px;
}
</style>

<!--
itemData:
nickName: 昵称
timeStamp: 时间戳
imgs: 数组，图片链接
word: 文字
topic: 话题
location: 定位
 -->
<template>
  <div class="soul-cell-item">
    <!-- 头部：头像+昵称+时间戳 -->
    <div class="soul-cell-item-header">
      <div class="soul-cell-item-header-icon">
        <img src="@/assets/images/headicon/0.png">
      </div>
      <div class="soul-cell-item-header-detail">
        <h1>{{itemData.nickName ? itemData.nickName : '昵称'}}</h1>
        <h2>{{itemData.timeStamp ? itemData.timeStamp : '时间戳'}}</h2>
      </div>
    </div>

    <!-- 内容：图片+文字+话题+定位 -->
    <div class="soul-cell-item-content">
      <div class="soul-cell-item-content-image">
        <template v-if="itemData.imgs.count != 0"> <!-- 判断是否有图片 -->
            <template v-for="(url, index) in itemData.imgs.url">
              <img
                :src="url"
                :preview="itemData.key"
                :key="index"
                :class="{
                  // 图片为4张就变成4宫格
                  'soul-cell-item-content-image-count-default': (itemData.imgs.count < 4),
                  'soul-cell-item-content-image-count-full': (itemData.imgs.count == 4)
                }"
              >
            </template>
        </template>
      </div>
      <div class="soul-cell-item-content-word">
        {{itemData.word ? itemData.word : '文字'}}
      </div>
      <div class="soul-cell-item-content-topic">
        {{itemData.topic ? itemData.topic : '#话题'}}
      </div>
      <div class="soul-cell-item-content-location">
        {{itemData.location ? itemData.location : '定位'}}
      </div>
    </div>

    <!-- 尾部：收藏+点赞+评论+转发 -->
    <div class="soul-cell-item-footer">
      <span style="width: 33%;">收藏</span>
      <span style="width: 22%">点赞</span>
      <span style="width: 22%">评论</span>
      <span style="width: 22%">转发</span>
    </div>

    <!-- 分割线：灰色 -->
    <div class="soul-cell-item-divide"></div>
  </div>
</template>

<script>
export default {
  name: 'SoulCellItem',
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
.soul-cell-item {
  width: 100%;
  background-color: #fff;
}

/* 头部 */
.soul-cell-item-header {
  display: flex;
  padding: 0.15rem 0.25rem;
}
.soul-cell-item-header-icon {
  width: 0.85rem;
  height: 0.85rem;
}
.soul-cell-item-header-icon img {
  width: 0.85rem;
  height: 0.85rem;
}
.soul-cell-item-header-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 0.06rem;
}
.soul-cell-item-header-detail h1{
  padding-left: 0.2rem;
  font-size: var(--font-size-square-nickname, 0.28rem);
  color: var(--font-color-square-nickname, #26D4D0);
}
.soul-cell-item-header-detail h2{
  padding-left: 0.2rem;
  font-size: var(--font-size-square-timestamp, 0.26rem);
  color: var(--font-color-disabled, #A6A6A6);
}

/* 内容 */
.soul-cell-item-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.15rem 0 0.15rem 1.3rem;
}
.soul-cell-item-content-image {

}
.soul-cell-item-content-image-count-default {
  width: 31%;
  margin-right: 2.3%;
  margin-bottom: 2.3%;
  border-radius: 0.2rem;
}
.soul-cell-item-content-image-count-full {
  width: 31%;
  margin-right: 2.4%;
  margin-bottom: 2.4%;
  border-radius: 0.2rem;
}
.soul-cell-item-content-word {
  padding-right: 0.6rem;
  font-size: var(--font-size-square-word, 0.3rem);
  line-height: var(--font-line-height-square-content, 0.6rem);
}
.soul-cell-item-content-topic {
  line-height: 0.8rem;
  color: var(--font-color-square-nickname, #26D4D0);
}
.soul-cell-item-content-location {
  line-height: 0.8rem;
  color: var(--font-color-square-nickname, #26D4D0);
}

/* 尾部 */
.soul-cell-item-footer {
  display: flex;
  padding: 0.15rem 0 0.15rem 1.3rem;
}
.soul-cell-item-divide {
  width: 100%;
  height: 0.15rem;
  background-color: var(--background-color-cell-divide, #F6F6F6);
}
</style>

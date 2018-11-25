<template>
  <div class="soul-square-content">
    <swiper
      :options="swiperOption"
      ref="soulSquareContentSwiper"
    >
      <swiper-slide>
        <div class="swiper-follow" :style="styleObject">
          <div>
            <!-- 搜索框 -->
            <soul-square-search></soul-square-search>
            <soul-cell-item></soul-cell-item>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-recommend" :style="styleObject">
          <div>
            <!-- 搜索框 -->
            <soul-square-search></soul-square-search>
            <template v-for="itemValue in recommendData">
              <soul-cell-item
                :item-data="itemValue"
                :key="itemValue.key"
              ></soul-cell-item>
            </template>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-newest" :style="styleObject">
          <div>
            <!-- 搜索框 -->
            <soul-square-search></soul-square-search>
            <template v-for="itemValue in newestData">
              <soul-cell-item
                :item-data="itemValue"
                :key="itemValue.key"
              ></soul-cell-item>
            </template>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import SoulSquareSearch from './Search'
import SoulCellItem from '../../common/SoulCellItem'
import axios from 'axios'
export default {
  name: 'SoulSquareContent',
  components: {
    SoulSquareSearch,
    SoulCellItem
  },
  data () {
    const that = this
    return {
      followData: {},
      recommendData: {},
      newestData: {},
      styleObject: {
        height: (window.innerHeight - 50) + 'px'
      }, // 给slide自适应高度，才不会滑动一个slide导致另一个slide也跟着滑动，50是底部导航栏的总高度
      swiperOption: {
        resistanceRatio: 0, // swiper到达边缘不能继续滑动
        on: {
          // 获取当前swiper的index值
          slideChangeTransitionStart: function () {
            that.changeSoulSquareContentIndex(this.activeIndex)
          }
        }
      } // Swiper设置
    }
  },
  computed: {
    // 使用swiper必须要写的
    swiper () {
      return this.$refs.soulSquareContentSwiper.swiper
    },
    ...mapState(['soulSquare'])
  },
  watch: {
    'soulSquare.contentIndex': function (newValue) {
      this.swiper.slideTo(newValue) // 切换页面
    }
  },
  methods: {
    // 获取推荐页面信息
    getSquareRecommendInfo () {
      axios.get('/static/mock/square-recommend.json')
        .then(this.getSquareRecommendInfoSucc)
        .catch(function (err) {
          console.log(`【axios获取信息失败，Content.vue】：${err}`)
        })
    },
    getSquareRecommendInfoSucc (res) {
      this.recommendData = res.data
    },
    // 获取最新页面信息
    getSquareNewestInfo () {
      axios.get('/static/mock/square-newest.json')
        .then(this.getSquareNewestInfoSucc)
        .catch(function (err) {
          console.log(`【axios获取信息失败，Content.vue】：${err}`)
        })
    },
    getSquareNewestInfoSucc (res) {
      this.newestData = res.data
    },
    // 给每个栏目初始化一个BScroll
    initBScroll () {
      // 绑定Better-Scroll，必须设置了probeType才能监测scroll事件
      this.bScrollFollow = new BScroll('.swiper-follow', {click: true, tap: true, probeType: 2})
      this.bScrollRecommend = new BScroll('.swiper-recommend', {click: true, tap: true, probeType: 2})
      this.bScrollNewest = new BScroll('.swiper-newest', {click: true, tap: true, probeType: 2})

      // 给每个swiper绑定scroll事件
      this.bScrollFollow.on('scroll', () => {
        this.changeSoulSquareMovingEventDirection(this.bScrollFollow.movingDirectionY)
        this.changeSoulSquareMovingEventTopY(this.bScrollFollow.y)
      })

      this.bScrollRecommend.on('scroll', () => {
        this.changeSoulSquareMovingEventDirection(this.bScrollRecommend.movingDirectionY)
        this.changeSoulSquareMovingEventTopY(this.bScrollRecommend.y)
      })

      this.bScrollNewest.on('scroll', () => {
        this.changeSoulSquareMovingEventDirection(this.bScrollNewest.movingDirectionY)
        this.changeSoulSquareMovingEventTopY(this.bScrollNewest.y)
      })
    },
    ...mapMutations([
      'changeSoulSquare',
      'changeSoulSquareContentIndex',
      'changeSoulSquareMovingEventDirection',
      'changeSoulSquareMovingEventTopY'
    ])
  },
  mounted () {
    this.swiper.slideTo(1) // 切换到‘推荐’页面
    this.getSquareRecommendInfo() // 获取推荐页面信息
    this.getSquareNewestInfo() // 获取最新页面信息
    this.initBScroll() // 初始化BScroll
  }
}
</script>

<style>
.soul-square-content {
  position: relative;
  z-index: var(--content);
}
</style>

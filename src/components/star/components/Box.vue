<template>
  <div class="container">
    <div class="soul-star-box">
      <ul>
        <li class="point" style="transform: translate3d(150px, 0px, 0px);">1</li>
        <li class="point" style="transform: translate3d(130px, 10px, 49px);">2</li>
        <li class="point" style="transform: translate3d(195px, 20px, -68px);">3</li>
        <li class="point" style="transform: translate3d(80px, 30px, 80px);">4</li>
        <li class="point" style="transform: translate3d(182px, 40px, 74px);">5</li>
        <li class="point" style="transform: translate3d(38px, 50px, 0px);">6</li>
        <li class="point" style="transform: translate3d(270px, 60px, 0px);">7</li>
        <li class="point" style="transform: translate3d(80px, 70px, 104px);">8</li><!-- 126 -->
        <li class="point" style="transform: translate3d(210px, 80px, -117px);">9</li><!-- 132 -->
        <li class="point" style="transform: translate3d(13px, 90px, 0px);">10</li>
        <li class="point" style="transform: translate3d(291px, 100px, 0px);">11</li>
        <li class="point" style="transform: translate3d(6px, 110px, 0px);">12</li>
        <li class="point" style="transform: translate3d(297px, 120px, 0px);">13</li>
        <li class="point" style="transform: translate3d(2px, 130px, 0px);">14</li>
        <li class="point" style="transform: translate3d(299px, 140px, 0px);">15</li>
        <li class="point" style="transform: translate3d(0px, 150px, 0px);">16</li>
        <li class="point" style="transform: translate3d(299px, 160px, 0px);">17</li>
        <li class="point" style="transform: translate3d(2px, 170px, 0px);">18</li>
        <li class="point" style="transform: translate3d(297px, 180px, 0px);">19</li>
        <li class="point" style="transform: translate3d(6px, 190px, 0px);">20</li>
        <li class="point" style="transform: translate3d(291px, 200px, 0px);">21</li>
        <li class="point" style="transform: translate3d(13px, 210px, 0px);">22</li>
        <li class="point" style="transform: translate3d(282px, 220px, 0px);">23</li>
        <li class="point" style="transform: translate3d(24px, 230px, 0px);">24</li>
        <li class="point" style="transform: translate3d(270px, 240px, 0px);">25</li>
        <li class="point" style="transform: translate3d(38px, 250px, 0px);">26</li>
        <li class="point" style="transform: translate3d(252px, 260px, 0px);">27</li>
        <li class="point" style="transform: translate3d(60px, 270px, 0px);">28</li>
        <li class="point" style="transform: translate3d(225px, 280px, 0px);">29</li>
        <li class="point" style="transform: translate3d(97px, 290px, 0px);">30</li>
        <li class="point" style="transform: translate3d(150px, 300px, 0px);">31</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoulStarBox',
  methods: {
    test () {
      console.log('6')
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  transform-style: preserve-3d;
  perspective: 600px;
}
.soul-star-box {
  position: relative;
  width: 300px;
  height: 300px;
  transition: 3s linear;
  transform-style: preserve-3d;
  transform:
    translate3d(30px, 50px, 0px)
    rotateX(40deg)
    rotateY(0deg)
    rotateZ(0deg);
  /*animation: revolution 20s linear 0s infinite;*/
  border-radius: 20px;
}
.point {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: pink;
  border-radius: 5px;
}
/* 公转 */
@keyframes revolution {
  0% {
    transform: translateX(40px) translateY(150px) rotateY(0deg);
  }
  100% {
    transform: translateX(40px) translateY(150px) rotateY(360deg);
  }
}

/* 每个点的自转，以保持面向屏幕 */
@keyframes rotation1 {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(-360deg) rotateZ(0deg);
  }
}
</style>

<template>
  <transition name="move">
    <div v-show="showFlag" class="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" alt="大图">
          <div @click="hide()" class="back">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    show() {
      this.showFlag = true;
    },
    hide() {
      this.showFlag = false;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    // 购物车 购物车详情在它的上面
    // 小于购物车，也小于购物车详情展开
    z-index: 30
    width: 100%
    background: #ffffff
    &.move-enter-active, &.move-leave-active
      // 线性运动
      transition: all 0.2s linear
      transform: translate3d(0, 0, 0)
    &.move-enter, &.move-leave-to
      // 从右到左的 整体移动
      transform: translate3d(100%, 0, 0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #ffffff
</style>

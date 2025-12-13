<template>
  <div class="cartcontrol">
    <transition name="move">
      <!-- 点击被穿透，冒泡向上，出发父组件点击，设置stop -->
      <div class="cart-decrease" v-show="food.count > 0" @click.stop.prevent="removeCart($event)">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-increase icon-add_circle" @click.stop.prevent="addCart($event)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    // 由better scroll派发的时间
    addCart(event) {
      if (!event._constructed) {
        return;
      }
      // console.log('click');
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      // console.log(this.food.count);
      // 分发到 父组件的 add
      this.$emit('add', event.target);
    },
    removeCart(event) {
      if (!event._constructed) {
        return;
      }
      // console.log('click');
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size : 0
    .cart-decrease
      display: inline-block
      padding: 6px
      opacity: 1
      // 能开启硬件加速
      transform: translate3d(0, 0, 0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      .inner
        display: inline-block
        line-height :24px
        font-size : 24px
        color : rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter, &.move-leave-to
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align : top
      width : 12px
      padding-top : 6px
      line-height : 24px
      text-align : center
      font-size : 10px
      color : rgb(147, 153, 159)
    .cart-increase
      display: inline-block
      padding: 6px
      line-height :24px
      font-size : 24px
      color : rgb(0, 160, 220)
</style>

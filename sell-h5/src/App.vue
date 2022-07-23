<template>
  <div class="app">
    <!-- <img src="./assets/logo.png">
    <router-view/>-->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
        <a></a>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- <div class="content">I am content</div> -->
    <!-- 给所有路由组件 传递值 -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from "@/components/header/header.vue";

const ERR_OK = 0;

export default {
  data () {
    return {
      seller: {}
    };
  },
  // 生命周期
  created() {
    this.getSeller();
  },
  methods: {
    getSeller() {
      // 这是一个异步过程，可能会出现问题
      this.axios.get('/api/seller').then((response) => {
        // console.log(response);
        let result = response.data;
        if (result.errno === ERR_OK) {
          this.seller = result.data;
          console.log(this.seller);
        }
      });
    }
  },
  components: {
    "v-header": header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "./common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>

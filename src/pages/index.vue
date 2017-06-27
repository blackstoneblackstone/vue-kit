<template lang="jade">
  .index-con
    f-header
    f-banner
    f-want
    f-market
    .super-btn.row
      ul
        li.col-lg-3.col-md-3(v-for="lifeServer in lifeServers")
          .icon
            img(:src="lifeServer.icon")
          .sb-title
            | {{lifeServer.name}}
    f-footer
</template>
<script>
  import fHeader from './common/header.vue'
  import fBanner from './common/banner.vue'
  import fFooter from './common/footer.vue'
  import fMarket from './common/serverMarket.vue'
  import fWant from './common/want.vue'
  let c1 = require("../img/icon_f_1.png");
  let c2 = require("../img/icon_f_2.png");
  let c3 = require("../img/icon_f_3.png");
  let c4 = require("../img/icon_f_4.png");
  let c5 = require("../img/icon_f_5.png");
  let c6 = require("../img/icon_f_6.png");
  let c7 = require("../img/icon_f_7.png");
  let c8 = require("../img/icon_f_8.png");
  let c9 = require("../img/icon_f_9.png");
  let c10 = require("../img/icon_f_10.png");
  let c11 = require("../img/icon_f_11.png");
  let c12 = require("../img/icon_f_12.png");

  export default {
    data: function () {
      return {

        lifeServers: [
          {name: "城市热力图", link: "#", icon: c1},
          {name: "全景地图", link: "#", icon: c2},
          {name: "常用电话", link: "#", icon: c3},
          {name: "电话区号", link: "#", icon: c4},
          {name: "身份证查询", link: "#", icon: c5},
          {name: "手机归属地", link: "#", icon: c6},
          {name: "邮编查询", link: "#", icon: c7},
          {name: "查号服务", link: "#", icon: c8},
          {name: "新华字典", link: "#", icon: c9},
          {name: "汉语词典", link: "#", icon: c10},
          {name: "在线翻译", link: "#", icon: c11},
          {name: "单位换算", link: "#", icon: c12},

        ]
      }
    },
    components: {
      fHeader,
      fBanner,
      fWant,
      fFooter,
      fMarket
    },
    computed: {},
    mounted () {
    },
    methods: {},
  }
</script>

<style lang="stylus">
  .super-btn
    height 700px
    ul
      position absolute
      height 700px
      width 73%
      padding-top: 20px
      margin -21px 13.5%
      text-align center
      background #ffffff url("../img/shu.png") no-repeat bottom
      background-size 100% auto
      li
        height 200px
        padding 50px
        cursor pointer
        .icon
          height 50%
          img
            height 100%
            transition height .3s
            &:hover
              height 120%
        .sb-title
          line-height 60px
        &:hover
          opacity 0.8


</style>

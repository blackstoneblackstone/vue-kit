<template lang="jade">
  .index-con
    f-header
    f-banner
    f-want
    .min-nav.row
      ul
        li.col-md-3.col-lg-3(v-for="supermarket in supermarkets")
          | {{supermarket.name}}
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

  import fWant from './want.vue'
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
        supermarkets: [
          {name: "热门服务", link: "#"},
          {name: "生活服务", link: "#"},
          {name: "政务服务", link: "#"},
          {name: "其他服务", link: "#"},
        ],
        lifeServers: [
          {name: "城市热力图", link: "#", icon: c1},
          {name: "热门服务", link: "#", icon: c2},
          {name: "热门服务", link: "#", icon: c3},
          {name: "热门服务", link: "#", icon: c4},
          {name: "热门服务", link: "#", icon: c5},
          {name: "热门服务", link: "#", icon: c6},
          {name: "热门服务", link: "#", icon: c7},
          {name: "热门服务", link: "#", icon: c8},
          {name: "热门服务", link: "#", icon: c9},
          {name: "热门服务", link: "#", icon: c10},
          {name: "热门服务", link: "#", icon: c11},
          {name: "热门服务", link: "#", icon: c12},

        ]
      }
    },
    components: {
      fHeader,
      fBanner,
      fWant,
      fFooter
    },
    computed: {},
    mounted () {
    },
    methods: {},
  }
</script>

<style lang="stylus">
  .min-nav
    margin-top 90px
    background url("../img/nav_line.png") no-repeat center
    height 200px
    background-size 100% auto
    text-align center
    ul
      width 70%
      margin 140px auto 0 auto
      color #ffffff

  .super-btn
    height 700px
    ul
      position absolute
      background-color #ffffff
      height 700px
      width 73%
      padding-top: 20px
      margin -21px 13.5%
      text-align center
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

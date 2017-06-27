<template lang="jade">
  .index-con
    f-header
    f-banner
    f-want
    f-market(:itemClick="serverClick")
    .server.row
      life-server(v-if="currentServerShow==1")
      org-server(v-if="currentServerShow==2")
      ul.super-btn(v-if="currentServerShow==0||currentServerShow==3")
        li.col-lg-3.col-md-3.animated.zoomIn(v-for="currentServer in currentServers",v-show="serShow")
          .icon
            img(:src="currentServer.icon")
          .sb-title
            | {{currentServer.name}}
    f-footer
</template>
<script>
  import fHeader from './common/header.vue'
  import fBanner from './common/banner.vue'
  import fFooter from './common/footer.vue'
  import fMarket from './common/serverMarket.vue'
  import fWant from './common/want.vue'
  import lifeServer from './lifeServer.vue'
  import orgServer from './orgServer.vue'

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
  let ch1 = require("../img/icon_h_1.png");
  let ch2 = require("../img/icon_h_2.png");
  let ch3 = require("../img/icon_h_3.png");
  let ch4 = require("../img/icon_h_4.png");
  let ch5 = require("../img/icon_h_5.png");
  let ch6 = require("../img/icon_h_6.png");
  let ch7 = require("../img/icon_h_7.png");
  let ch8 = require("../img/icon_h_8.png");


  export default {
    data: function () {
      return {
        currentServers: [
          {name: "运输许可证", link: "#", icon: ch1},
          {name: "大病救治", link: "#", icon: ch2},
          {name: "出入境证件办理", link: "#", icon: ch3},
          {name: "临时身份证办理", link: "#", icon: ch4},
          {name: "出生证", link: "#", icon: ch5},
          {name: "手机归属地", link: "#", icon: ch6},
          {name: "护士执业变更", link: "#", icon: ch7},
          {name: "医生执业注册", link: "#", icon: ch8},
        ],
        serShow: true,
        currentServerShow: 0,
        //其他服务
        otherServers: [
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
        ],
//        热门服务
        hotServers: [
          {name: "运输许可证", link: "#", icon: ch1},
          {name: "大病救治", link: "#", icon: ch2},
          {name: "出入境证件办理", link: "#", icon: ch3},
          {name: "临时身份证办理", link: "#", icon: ch4},
          {name: "出生证", link: "#", icon: ch5},
          {name: "手机归属地", link: "#", icon: ch6},
          {name: "护士执业变更", link: "#", icon: ch7},
          {name: "医生执业注册", link: "#", icon: ch8},
        ]
      }
    },
    components: {
      fHeader,
      fBanner,
      fWant,
      fFooter,
      fMarket,
      lifeServer,
      orgServer
    },
    computed: {},
    methods: {
      serverClick(k){
        this.serShow = false;
        this.currentServerShow = k;
        switch (k) {
          case 0:
            this.currentServers = this.hotServers;
            break;
          case 1:

            break;
          case 3:
            this.currentServers = this.otherServers;
            break;
        }
        setTimeout(() => {
          this.serShow = true;
        }, 200)

      }
    },
  }
</script>

<style lang="stylus">
  .server
    min-height 600px
    width 73%
    padding-top: 20px
    padding-bottom 100px
    margin -21px 13.5%
    background #ffffff url("../img/shu.png") no-repeat bottom
    background-size 100% auto
    transition height 1s

  .super-btn
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

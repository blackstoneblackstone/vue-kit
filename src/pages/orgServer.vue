<template lang="jade">
  .life-server
    .l-pay.row
      .lp-title 生活缴费
      ul
        li.col-lg-3.col-md-3(v-for="lPay in lPays")
          .icon
            img(:src="lPay.icon")
          .lpl-title
            | {{lPay.name}}
    .l-driver.row
      .lp-title 出行服务
      ul
        li.col-lg-4.col-md-4(v-for="lDriver in lDrivers")
          .icon
            img(:src="lDriver.icon")
          .lpl-title
            | {{lDriver.name}}
    .l-money.row
      .lp-title  金融理财
      ul.top
        li.col-lg-4.col-md-4(v-for="lMoneyTop in lMoneys.top")
          .icon
            img(:src="lMoneyTop.icon")
          .lpl-title
            | {{lMoneyTop.name}}
      ul.bottom
        li.col-lg-3.col-md-3(v-for="lMoneyBottom in lMoneys.bottom")
          .icon
            img(:src="lMoneyBottom.icon")
          .lpl-title
            | {{lMoneyBottom.name}}
    .l-l.row
      .lp-title 生活服务
      ul
        li.col-lg-3.col-md-3(v-for="lLife in lLifes")
          .icon
            img(:src="lLife.icon")
          .title
            | {{lLife.name}}
    .l-heath.row
      .lp-title 养生
      ul
        li.col-lg-4.col-md-4(v-for="lHeath in lHeaths")
          .icon
            img(:src="lHeath.icon")
            | {{lHeath.name}}


</template>
<script>
  let lPayIcons = [require("../img/l_pay_0.png"),
    require("../img/l_pay_1.png"),
    require("../img/l_pay_2.png"),
    require("../img/l_pay_3.png"),
  ];
  let lDriverIcons = [
    require("../img/icon_d_0.png"),
    require("../img/icon_d_1.png"),
    require("../img/icon_d_2.png"),
    require("../img/icon_d_3.png"),
    require("../img/icon_d_4.png"),
    require("../img/icon_d_5.png"),
    require("../img/icon_d_6.png"),
    require("../img/icon_d_7.png"),
    require("../img/icon_d_8.png"),
  ];
  let lMoneyIcons = [
    require("../img/icon_m_0.png"),
    require("../img/icon_m_1.png"),
    require("../img/icon_m_2.png"),
    require("../img/icon_m_3.png"),
    require("../img/icon_m_4.png"),
    require("../img/icon_m_5.png"),
    require("../img/icon_m_6.png"),
  ];
  let lLifeIcons = [
    require("../img/icon_l_0.png"),
    require("../img/icon_l_1.png"),
    require("../img/icon_l_2.png"),
    require("../img/icon_l_3.png"),
    require("../img/icon_l_4.png"),
    require("../img/icon_l_5.png"),
    require("../img/icon_l_6.png"),
    require("../img/icon_l_7.png"),
  ];
  let lHeathIcons = [
    require("../img/icon_he_0.png"),
    require("../img/icon_he_1.png"),
    require("../img/icon_he_2.png"),
  ];
  export default {
    data: function () {
      return {
        lPays: [
          {name: "水费缴纳", link: "#", icon: lPayIcons[0]},
          {name: "电费缴纳", link: "#", icon: lPayIcons[1]},
          {name: "供暖费缴纳", link: "#", icon: lPayIcons[2]},
          {name: "燃气费缴纳", link: "#", icon: lPayIcons[3]},
        ],
        lDrivers: [
          {name: "长途汽车", link: "#", icon: lDriverIcons[0]},
          {name: "航班", link: "#", icon: lDriverIcons[1]},
          {name: "今日油价", link: "#", icon: lDriverIcons[2]},
          {name: "小汽车摇号", link: "#", icon: lDriverIcons[3]},
          {name: "停车场", link: "#", icon: lDriverIcons[4]},
          {name: "尾号摇号", link: "#", icon: lDriverIcons[5]},
          {name: "交通出行", link: "#", icon: lDriverIcons[6]},
          {name: "公交自行车", link: "#", icon: lDriverIcons[7]},
          {name: "加油站", link: "#", icon: lDriverIcons[8]},
        ],
        lMoneys: {
          top: [
            {name: "汇率查询", link: "#", icon: lMoneyIcons[0]},
            {name: "黄金价格", link: "#", icon: lMoneyIcons[1]},
            {name: "白银价格", link: "#", icon: lMoneyIcons[2]},
          ],
          bottom: [
            {name: "房税计算", link: "#", icon: lMoneyIcons[3]},
            {name: "房贷计算", link: "#", icon: lMoneyIcons[4]},
            {name: "车贷计算", link: "#", icon: lMoneyIcons[5]},
            {name: "个税计算", link: "#", icon: lMoneyIcons[6]},
          ]
        },
        lLifes: [
          {name: "天气预报", link: "#", icon: lLifeIcons[0]},
          {name: "快递查询", link: "#", icon: lLifeIcons[1]},
          {name: "电视节目", link: "#", icon: lLifeIcons[2]},
          {name: "电脑维修", link: "#", icon: lLifeIcons[3]},
          {name: "管道疏通", link: "#", icon: lLifeIcons[4]},
          {name: "装饰装修", link: "#", icon: lLifeIcons[5]},
          {name: "家电维修", link: "#", icon: lLifeIcons[6]},
          {name: "搬家服务", link: "#", icon: lLifeIcons[7]},
        ],
        lHeaths: [
          {
            name: "重要大会", link: "#", icon: lHeathIcons[0]
          },
          {name: "食物热量", link: "#", icon: lHeathIcons[1]},
          {name: "标准体重", link: "#", icon: lHeathIcons[2]},
        ]
      }
    },
    components: {},
    computed: {},
    mounted () {
    },
    methods: {},
  }
</script>

<style lang="stylus" scoped>
  .life-server
    width 100%
    background-color #ffffff

  .lp-title
    border-left solid #62ca67 3px
    font-size: 25px
    padding-left: 15px

  ul
    padding 50px 0

  .lpl-title
    line-height: 75px;
    font-size: 18px

  .l-pay
    padding 50px
    margin-top 50px
    li
      height 200px
      text-align center
      cursor pointer
      .icon
        height 100px
        transition height .2s
        &:hover
          height 120px

  .l-driver
    background-color #e6f9e6
    height 600px
    padding 50px
    li
      text-align center
      height 150px
      cursor pointer
      .icon
        height 50px
        transition height .2s
        &:hover
          height 70px

  .l-money
    padding 50px
    margin-top 50px
    li
      height 150px
      text-align center
      cursor pointer
      .icon
        height 50px
        transition height .2s
        &:hover
          height 70px

  .bottom
    margin-top 80px

  .l-l
    background-color #e6f9e6
    padding 50px
    li
      height 200px
      text-align center
      cursor pointer
      .icon
        height 150px
        transition height .2s
        &:hover
          height 180px
      .title
        line-height 50px
        color #5dc65f

  .l-heath
    padding 50px
    margin-top 50px
    margin-bottom 215px
    li
      height 100px
      text-align center
      cursor pointer
      .icon
        border solid #979797 2px
        height 100px
        padding 20px
        color #979797
        &:hover
          background-color #f2f2f2
        img
          height 60px
          margin-right 30px

  img
    height 100%

  .row
    margin-left 0
    margin-right 0

</style>

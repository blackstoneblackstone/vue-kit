<template lang="jade">
  .header.row
    .logo.col-lg-3.col-md-3
      img(src="../../img/logo.png")
    ul.navs.col-lg-7.col-md-7
      li.nav.col-lg-2.col-md-2(v-for="(nav,index) in navs",:class="index==currentNav?'nav-active':''")
        | {{nav.name}}
    ul.tool.col-lg-2.col-md-2
      li.col-lg-3.col-md-3
        i.icon.icon-search
      li.col-lg-4.col-md-4
        | 登录
      li.col-lg-5.col-md-5
        .f-btn
          | 注册


</template>
<script>
  export default {
    data: function () {
      return {
        currentNav: 0,
        navs: [
          {name: "首页", link: "#"},
          {name: "服务中心", link: "#"},
          {name: "民生信用", link: "#"},
          {name: "爱房山", link: "#"},
          {name: "商家入口", link: "#"},
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

<style lang="stylus">
  .header
    height 50px
    background-color #5dc65f
    color #ffffff
    font-size 14px
    line-height 50px
    text-align center

  .logo
    height 100%
    img
      height 40px

  .nav
    cursor pointer
    &:hover
      background-color rgba(255, 255, 255, 0.3)

  .nav-active
    height: 50px;
    border-bottom solid 2px #ffffff

  .f-btn
    height: 30px;
    border: solid #fff 1px;
    border-radius: 1px;
    margin-top: 10px;
    line-height: 30px;
    &:hover
      background-color rgba(255, 255, 255, 0.3)
  .tool
    li
      cursor pointer


</style>

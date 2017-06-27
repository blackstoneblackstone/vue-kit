<template lang="jade">
  .want
    .w-title
      |我要
    ul.row.w-conn
      li.col-lg-3.col-md-3.gray
        img(src="../img/zixun_bg.png")
        br
        | 咨询
      li.col-lg-3.col-md-3.gray
        img(src="../img/jianyi_bg.png")
        br
        | 建议
      li.col-lg-3.col-md-3.gray
        img(src="../img/tousu_bg.png")
        br
        | 投诉
      li.col-lg-3.col-md-3.gray
        img(src="../img/jindu_bg.png")
        br
        | 查询办事进度
</template>
<script>

  export default {
    data: function () {
      return {

      }
    },
    components: {},
    computed: {},
    mounted () {
    },
    methods: {},
  }
</script>

<style lang="stylus" scoped="">
  .want
    position absolute
    text-align center
    width 60%
    margin-left 20%
    height 200px
    margin-top -90px
    background url("../img/want_bg.png") no-repeat
    background-size 100% 100%
    .w-title
      height 70px
      line-height 70px
      font-size 20px
    .w-conn
      height 150px
      vertical-align middle
      li
        background url("../img/want_btn_bg.png") no-repeat center
        height 100px
        padding 20px
        background-size 60% auto
        cursor pointer
        img
          width 35px
          margin-bottom 5px
        &:hover
          webkit-filter: grayscale(0%)
          -moz-filter: grayscale(0%)
          -ms-filter: grayscale(0%)
          -o-filter: grayscale(0%)
          filter: grayscale(0%)
          filter: 0

  .gray
    -webkit-filter: grayscale(100%)
    -moz-filter: grayscale(100%)
    -ms-filter: grayscale(100%)
    -o-filter: grayscale(100%)
    filter: grayscale(100%)
    filter: gray



</style>

<template lang="jade">
  .footer.row
    ul.f-links
      li.col-lg-3.col-md-3
        |关于我们
      li.col-lg-3.col-md-3
        |用户协议
      li.col-lg-3.col-md-3
        |热线电话
    .f-qrcode
      img(src="../../img/wxqrcode.png")
      br
      |关注微信公众号
    .f-copy
      | 中科软版权所有 © 1997-2017 · B1.B2-20090185 · 京ICP备17006647号-2

</template>
<script>

  export default {
    data: function () {
      return {}
    },
  }
</script>

<style lang="stylus">
  .footer
    background-color #28652a
    height 200px
    margin-top -50px
    .f-links
      width 60%
      margin 60px auto auto 13.5%
      text-align center
      color #ffffff
      li
        border-right solid #ffffff 1px
        cursor pointer
        &:hover
          color rgba(255,255,255,0.5)
    .f-copy
      margin-top 160px
      text-align center
      color #ffffff
    .f-qrcode
      position absolute
      border solid #28652a 5px
      right  10%
      margin-top -150px
      width 200px
      text-align center
      color #ffffff
      font-size 14px
      line-height 40px
      img
        width 100%


</style>

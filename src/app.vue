<template>
  <router-view class="container-fluid"></router-view>
</template>
<script>
  export default {
    name: 'app',
  }
</script>
<style lang='stylus'>
  @import "./assets/animate.css"
  @import "./lib/zui/css/zui.min.css"

  *
    box-sizing border-box
  html
    height: 100%
    width: 100%
    min-height: 720px
    background: #f5f5f5

  body
    width: 100%
    height: 100%
    min-width: 1200px
    min-height: 720px
    font-family: "Lantinghei SC, Open Sans, Arial, Hiragino Sans GB, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, STHeiti, WenQuanYi Micro Hei, SimSun, sans-serif"
    font-weight: bold


  ul,li
    list-style none
    padding 0

  li
    animation-name zoomIn
    animation-duration 1s

  @keyframes zoomIn
    0%
      opacity 0
      transform scale3d(.3, .3, .3)
    50%
      opacity 1

</style>

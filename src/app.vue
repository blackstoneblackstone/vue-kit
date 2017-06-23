<template>
  <router-view class="container"></router-view>
</template>
<script>
export default {
  name: 'app',
}
</script>
<style lang='stylus'>
  @import "./assets/cssreset-min.css"
  @import "./assets/animate.css"
  @css {
    html {
      filter: unquote('progid:DXImageTransform.Microsoft.gradient( startColorstr=' #433798 ', endColorstr=' #7f2891 ',GradientType=0 )')
    }
  }

  html
    height: 100%;
    width: 100%;
    min-height: 720px;
    background: #433798;
    background: -moz-linear-gradient(top, #433798 0%, #7f2891 100%);
    background: -webkit-linear-gradient(top, #433798 0%, #7f2891 100%);
    background: linear-gradient(to bottom, #433798 0%, #7f2891 100%);

  body
    width: 100%;
    height: 100%;
    min-width: 1280px;
    min-height: 720px;
    font-family: "Microsoft YaHei", STHeiti, 'Helvetica Neue', Helvetica, Arial, 'sans-serif';
    background: url('./img/bg-star-1.png') repeat-x;
    font-weight: 300;
</style>

<template lang="jade">
  .min-nav.row
    ul
      li.col-md-3.col-lg-3(v-for="(supermarket,index) in supermarkets",@click="iClick(index)",
      :class="currentBtn==index?'sm-active':''")
        | {{supermarket.name}}
</template>
<script>
  export default {
    data: function () {
      return {
        currentBtn: 0,
        supermarkets: [
          {name: "热门服务", link: "#"},
          {name: "生活服务", link: "#"},
          {name: "政务服务", link: "#"},
          {name: "其他服务", link: "#"},
        ]
      }
    },
    props: {
      itemClick: {
        type: Function,
        required: true
      }
    },
    methods: {
      iClick(index){
        this.currentBtn = index;
        this.itemClick(index);
      }
    },
  }
</script>

<style lang="stylus">
  .min-nav
    margin-top 90px
    background url("../../img/nav_line.png") no-repeat center
    height 200px
    background-size 100% auto
    text-align center
    ul
      width 70%
      margin 120px auto 0 auto
      color #ffffff
      li
        cursor pointer
        height: 60px;
        line-height: 60px;
        &:hover
          background-color rgba(255, 255, 255, .2)
      .sm-active
        background-color rgba(255, 255, 255, .2)
</style>

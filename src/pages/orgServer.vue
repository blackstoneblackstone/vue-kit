<template lang="jade">
  .Red-server
    .l-People.row
      .lp-title 民政局
      ul
        li.col-lg-3.col-md-3(v-for="lPeople in lPeoples")
          .icon
            img(:src="lPeople.icon")
          .lpl-title
            | {{lPeople.name}}
    .l-Police.row
      .lp-title 公安局
      ul
        li(v-for="lPolice in lPolices",:class="'col-lg-'+12/(lPolices.length)+' col-md-'+12/lPolices.length")
          .lp-con
            .icon
              img(:src="lPolice.icon")
            .lpl-title
              | {{lPolice.name}}
            .lpl-desc
              | {{lPolice.desc}}
    .l-Child.row
      .lp-title  卫计委
      ul.top
        li.col-lg-6.col-md-6(v-for="lChildTop in lChilds.top")
          .icon
            img(:src="lChildTop.icon")
          .lpl-title
            | {{lChildTop.name}}
      ul.bottom
        li.col-lg-4.col-md-4(v-for="lChildBottom in lChilds.bottom")
          .icon
            img(:src="lChildBottom.icon")
          .lpl-title
            | {{lChildBottom.name}}
    .l-l.row
      .lp-title 红十字会
      ul
        template(v-for="(lRed,index) in lReds")
          li.col-lg-6.col-md-6(v-if="index==2||index==3")
            .title.col-lg-6.col-md-6
              .lpt-name
                | {{lRed.name}}
              .lpt-desc
                | {{lRed.desc}}
            .icon.col-lg-6.col-md-6
              img(:src="lRed.icon")
          li.col-lg-6.col-md-6(v-if="index!=2&&index!=3")
            .icon.col-lg-6.col-md-6
              img(:src="lRed.icon")
            .title.col-lg-6.col-md-6
              .lpt-name
                | {{lRed.name}}
              .lpt-desc
                | {{lRed.desc}}
    .l-Traffic.row
      .lp-title 交通局
      ul
        li.col-lg-6.col-md-6(v-for="lTraffic in lTraffics")
          .icon
            img(:src="lTraffic.icon")
            | {{lTraffic.name}}


</template>
<script>
  let lPeopleIcons = [
    require("../img/icon_p_0.png"),
    require("../img/icon_p_1.png"),
    require("../img/icon_p_2.png"),
    require("../img/icon_p_3.png"),
  ];
  let lPoliceIcons = [
    require("../img/icon_police_0.png"),
    require("../img/icon_police_1.png"),
  ];
  let lChildIcons = [
    require("../img/icon_w_0.png"),
    require("../img/icon_w_1.png"),
    require("../img/icon_w_2.png"),
    require("../img/icon_w_3.png"),
    require("../img/icon_w_4.png"),
  ];
  let lRedIcons = [
    require("../img/icon_s_0.png"),
    require("../img/icon_s_1.png"),
    require("../img/icon_s_2.png"),
    require("../img/icon_s_3.png"),
    require("../img/icon_s_4.png"),
    require("../img/icon_s_5.png"),
  ];
  let lTrafficIcons = [
    require("../img/icon_j_0.png"),
    require("../img/icon_j_1.png"),
  ];
  export default {
    data: function () {
      return {
        lPeoples: [
          {name: "水费缴纳", link: "#", icon: lPeopleIcons[0]},
          {name: "电费缴纳", link: "#", icon: lPeopleIcons[1]},
          {name: "供暖费缴纳", link: "#", icon: lPeopleIcons[2]},
          {name: "燃气费缴纳", link: "#", icon: lPeopleIcons[3]},
        ],
        lPolices: [
          {name: "出入境证件办理", link: "#", icon: lPoliceIcons[0], desc: "出入境证件办理出入境证件办理"},
          {name: "临时身份证办理", link: "#", icon: lPoliceIcons[1], desc: "出入境证件办理出入境证件办理"},
        ],
        lChilds: {
          top: [
            {name: "护士执业变更", link: "#", icon: lChildIcons[0]},
            {name: "医疗机构审批", link: "#", icon: lChildIcons[1]},
          ],
          bottom: [
            {name: "医疗机构变更", link: "#", icon: lChildIcons[2]},
            {name: "医疗机构执业登记", link: "#", icon: lChildIcons[3]},
            {name: "医疗执业注册", link: "#", icon: lChildIcons[4]},
          ]
        },
        lReds: [
          {name: "筹资募捐", link: "#", icon: lRedIcons[0], desc: "汇聚人道力量，提高救助实力，用于灾害救助，助学，送温暖，募捐宣传和信息公开"},
          {name: "大病救助", link: "#", icon: lRedIcons[1], desc: "面向年龄在18岁一下患有白血病，血友病，再生障碍性贫血，肾衰竭，恶性肿瘤等病症"},
          {name: "特困救助", link: "#", icon: lRedIcons[2], desc: "面向本区户籍求助对象，提供人道救助办理程序，包括申请，受理，审核三部分"},
          {name: "造血干细胞捐献", link: "#", icon: lRedIcons[3], desc: "动员各个组织和社区，招募造血干细胞支援捐献者，现场采集血样，保持与志愿者的联系"},
          {name: "医疗救助程序", link: "#", icon: lRedIcons[4], desc: "面向本区户籍求助对象，提供医疗救助办理程序，包括申请，受理，审核三部分"},
          {name: "实体服务资源", link: "#", icon: lRedIcons[5], desc: "面向社会组织、机关，提供救护知识培训，建立社区红十字会服务站，提供特色红十字社区服务"},
        ],
        lTraffics: [
          {name: "运输开业许可", link: "#", icon: lTrafficIcons[0]},
          {name: "运输经营许可", link: "#", icon: lTrafficIcons[1]},
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .col-lg-6, .col-md-6
    padding 0

  .Red-server
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
    font-size: 14px

  .l-People
    padding 50px
    li
      height 200px
      text-align center
      cursor pointer
      .icon
        height 70px
        transition height .2s
        &:hover
          height 80px

  .l-Police
    background-color #e6f9e6
    height 450px
    padding 50px
    li
      text-align center
      height 300px
      cursor pointer
      .lp-con
        width 70%
        height 250px
        background-color #ffffff
        padding-top 50px
        margin auto
        .icon
          height 50px
          transition height .2s
        .lpl-title
          line-height 35px
        .lpl-desc
          font-size 12px
        &:hover
          box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 10px

  .l-Child
    padding 50px
    li
      height 150px
      text-align center
      cursor pointer
      .icon
        height 80px
        transition height .2s
        &:hover
          height 90px

  .bottom
    margin-top 80px

  .l-l
    background-color #e6f9e6
    padding 50px
    li
      height 100px
      text-align center
      cursor pointer
      .icon
        height 100px
        transition height .2s
        background-color #ffffff
        img
          height 50px
          margin-top 25px
      .title
        text-align left
        line-height 50px
        padding 0 10px
        .lpt-name
          color #60675f
          font-weight bolder
          line-height 35px
        .lpt-desc
          line-height 20px
          font-size 12px

  .l-Traffic
    padding 50px
    margin-bottom 215px
    li
      height 100px
      text-align center
      cursor pointer
      padding 10px
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

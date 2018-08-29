<!--<template>-->
  <!--<div>-->

  <!--<Menu theme="dark" :openNames="lastOpen?[lastOpen.substr(0,lastOpen.indexOf('-'))]:[0]"-->
        <!--:accordion="true" :activeName="lastOpen" ref="menu" @on-select="handleSelect"-->
        <!--width="auto">-->
    <!--<Submenu v-for="(grade,index) in grades" :name="grade.grade_name" :key="index">-->
      <!--<template slot="title">-->
        <!--<Icon type="ios-navigate"></Icon>-->
        <!--{{grade.grade_name}}-->
      <!--</template>-->
      <!--<MenuItem :name="grade.grade_name+'-'+lesson.lesson_name" v-for="(lesson,index) in grade.lessons"-->
                <!--:key="index">-->
        <!--{{lesson.lesson_name}}-->
      <!--</MenuItem>-->
    <!--</Submenu>-->
  <!--</Menu>-->

  <!--<transition name=slide-fade>-->
    <!--<AddGroup class="modal-add" v-if="modal" :group-data="grades" @hide="handleSwitchHide"-->
              <!--@submit="handleNewGroupSubmit">-->
    <!--</AddGroup>-->
  <!--</transition>-->
  <!--<div class="add-grade" @click="handleSwitchHide">-->
    <!--<Icon type="md-add"/>-->
    <!--<span>新建分组</span>-->
  <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import {mapGetters, mapState} from 'vuex';-->

  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--grades,-->
        <!--lastOpen-->
      <!--}-->
    <!--},-->

  <!--}-->
<!--</script>-->
<!--<style lang="less">-->

<!--</style>-->

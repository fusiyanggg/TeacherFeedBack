<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu theme="dark" :openNames="lastOpen?[lastOpen.substr(0,lastOpen.indexOf('-'))]:[0]"
            :accordion="true" :activeName="lastOpen" ref="menu" @on-select="handleSelect"
            width="auto">
        <Submenu v-for="(grade,index) in grades" :name="grade.grade_name" :key="index">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{grade.grade_name}}
          </template>
          <MenuItem :name="grade.grade_name+'-'+lesson.lesson_name" v-for="(lesson,index) in grade.lessons"
                    :key="index">
            {{lesson.lesson_name}}
          </MenuItem>
        </Submenu>
      </Menu>

      <transition name=slide-fade>
        <AddGroup class="modal-add" v-if="modal" :group-data="grades" @hide="handleSwitchHide"
                  @submit="handleNewGroupSubmit">
        </AddGroup>
      </transition>
      <div class="add-grade" @click="handleSwitchHide">
        <Icon type="md-add"/>
        <span>新建分组</span>
      </div>
    </Sider>

    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem v-for=" (name,index) in bread" :key="index">{{name}}</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <router-view v-if="lastOpen" :selected="lastOpen"/>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>

  import AddGroup from './form/AddGroup'
  import {mapGetters, mapState, mapMutations, mapActions} from 'vuex'

  export default {

    data() {
      return {
        value1: '1',
        lastOpen: '',
        path: null,
        addGroupData: [{grade_name: 'child'}, {grade_name: 'class1'}],
        modal: false,
        open: []
      }
    },

    computed: {
      ... mapState({
        grades: (state) => state.menu.grades,
      }),
      bread() {
        return this.lastOpen ? this.lastOpen.split('-') : ['null']
      }
    },

    components: {
      AddGroup
    },

    methods: {
      ...mapActions('menu', ['initGradesList']),
      handleSelect(evt) {
        this.$router.push('/tab');
        this.lastOpen = evt;
        localStorage.setItem('lastOpen', evt);
      },
      handleNewGroupSubmit(value) {
        this.lastOpen = value.grade_name + '-' + value.lesson_name;
        localStorage.setItem('lastOpen', this.lastOpen);
        this.$refs.menu.updateActiveName()
      },
      handleSwitchHide() {
        this.modal = !this.modal;
      },
    },

    async created() {
      let lastOpen = localStorage.getItem('lastOpen');
      this.lastOpen = lastOpen ? lastOpen : '';
      await this.$store.dispatch('menu/initGradesList');
      this.$nextTick(() => {
        this.$refs.menu.updateActiveName();
        this.$refs.menu.updateOpened()
      })
    },
  }
</script>

<style scoped lang="less">
  .s-level {
    display: none;
    transition: all .2s ease-in-out
  }

  .s-level .s-level-item {
    text-align: center;
    align-content: center;
    border-bottom: 1px solid #363E4F;
    padding: 3px;
    &:first-child {
      border-top: 1px solid #363E4F;
    }
  }

  .ivu-menu-item-selected .s-level {
    display: block;
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;

    border-radius: 4px;
    overflow: hidden;

    .modal-add {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 80px;
    }

    .add-grade {
      position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
      margin: auto;
      color: #fff;
      font-size: 30px;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, .1);
      background-color: rgba(0, 0, 0, .1);
      box-sizing: border-box;
      text-align: center;
      line-height: 35px;
      vertical-align: middle;
      transition: all .2s ease-in-out;
      overflow: hidden;
      cursor: pointer;
      span {
        display: none;
        font-size: 16px;
        line-height: 16px;
        vertical-align: middle;
        user-select: none;
      }
      &:hover {
        width: 150px;
        span {
          display: inline-block;

        }
        background: #fff;
        color: #363E4F;
      }
    }
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .slide-fade-enter-active {
    transition: all .2s ease-in;
  }

  .slide-fade-leave-active {
    transition: all .2s ease-in;

  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(15px) scale(0.8);

    opacity: 0;
  }
</style>

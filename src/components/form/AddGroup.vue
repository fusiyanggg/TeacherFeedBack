<template>
  <div class="add-group">
    <div class="mask" @click="handleMask"></div>
    <div class="board">
      <Select clearable style="width:100%" placeholder="选择分组" @on-change="handleChange">
        <Option class="slc-opt" v-for="(item,index) in grades" :value="item" :key="index">{{ item }}</Option>
        <Option class="slc-opt" value="addNew">新建分组</Option>
      </Select>
      <Input v-if="groupInput" class="add-input" placeholder="分组名" v-model="GroupName"/>
      <Input class="add-input" placeholder="子分组名" v-model="subGroupName"/>
      <Button class="add-submit" type="success" long :disabled=isDisabled @click="handleSubmit">提交</Button>
    </div>
  </div>
</template>
<script>
  import utils from '../../tools/utils'
  import {mapActions} from 'vuex'

  export default {
    props: {
      groupData: {type: Array},
      addGroupData: {
        type: Array,
      }
    },

    data() {
      return {
        groupInput: false,
        GroupName: '',
        subGroupName: ''
      }
    },

    computed: {
      grades() {
        return this.groupData ? this.groupData.map(v => v.grade_name) : null
      },
      isDisabled() {
        return !(this.subGroupName && this.GroupName)
      }
    },

    methods: {
      ...mapActions('menu', ['createGrade']),
      handleChange(value) {
        this.groupInput = value === 'addNew';
        this.GroupName = this.groupInput ? '' : value
      },
      async handleSubmit(e) {
        let data = {grade_name: this.GroupName, lesson_name: this.subGroupName};
        let res = await this.$store.dispatch('menu/createGrade', data);
        console.log(res);
        this.$emit('submit', data)
      },
      handleMask(e) {
        this.$emit('hide')
      }
    }
  }
</script>
<style lang="less" scoped>
  .add-group {
    width: 180px;
    padding: 5px;
    border: 1px solid white;
    border-radius: 5px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;

    .add-input {
      margin-top: 5px;
    }
    .add-submit {
      margin-top: 5px;
    }

    .slc-opt {
    }
    .mask {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
    }
    .board {
      position: relative;
    }
  }
</style>

<template>
  <ul class="page-list">
    <li class="page-list-item" v-for=" i in 8">
      <span class="page-list-item-title">Title</span>
      <span class="page-list-item-last">last</span>
      <span class="page-list-item-create">create</span>
    </li>
    <li class="page-list-item page-list-add" @click="handleAddFeedBack">
      <Icon type="md-add-circle" size="40" color="#2D8CF0"/>
    </li>
    <Page :total="10"></Page>
    <!--<FeedBack></FeedBack>-->
    <Modal
      v-model="fff"
      title="上的发送到返送啊"
    >sdasdf
    </Modal>
  </ul>
</template>
<script>
  let _feedBackList = [{
    createTime: Date.now(),
    title: 'lala',
  }];
  import FeedBack from '../feedBack/FeedBack'

  export default {
    props: ['feedBackList'],
    data() {
      return {
        fff: false
      }
    },
    components: {
      FeedBack
    },
    methods: {
      handleAddFeedBack() {
this.fff=!this.fff
      }
    }
  }
</script>
<style scoped lang="less">
  .page-list {
    padding: 1px;

    .page-list-item {
      display: flex;
      align-items: center;
      height: 60px;
      margin-bottom: 16px;
      padding: 12px;
      border: 1px solid #dcdee2;
      border-radius: 5px;
      box-sizing: border-box;
      font-size: 26px;
      cursor: pointer;
      justify-content: space-between;
      .page-list-item-create {
      }
    }

    .page-list-add {
      justify-content: center;
    }
  }

</style>

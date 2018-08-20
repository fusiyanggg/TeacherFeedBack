<template>
  <ul class="page-list">
    <li class="page-list-item" v-for=" i in 10">
        <span class="page-list-item-title">Title</span>
        <span class="page-list-item-last">last</span>
        <span class="page-list-item-create">create</span>

    </li>
    <Page :total="10"></Page>
  </ul>
</template>
<script>


  export default {
    data() {
      return {}

    }
  }
</script>
<style scoped lang="less">
  .page-list {
    padding: 1px;

    .page-list-item {
      height: 64px;
      border: 1px solid #dcdee2;
      border-radius: 5px;
      margin-bottom: 16px;
      cursor:pointer;
      box-sizing: border-box;
      padding:16px;
      display: flex;
      align-items: center;
      font-size: 26px;
    }
  }

</style>

<template>
  <Card class="main">
    <div class="mask"></div>
    <div class="content">
      <Input v-model="title"/>
      <Divider/>
      <Input type="text"/>
      <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>Click or drag files here to upload</p>
        </div>
      </Upload>
      <Input type="textarea"/>
    </div>

  </Card>

</template>
<script>
  export default {
    data() {
      return {
        title: ''
      }

    }
  }
</script>
<style lang="less" scoped>
  .main {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;

    }

    .content {
      background: rgba(00, 233, 233);
      max-width: 1366px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

</style>

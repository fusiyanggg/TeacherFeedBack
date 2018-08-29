<template>
  <Tabs value="name1">
    <TabPane :label="tab.toString()" :name="tab.toString()" v-for="tab in tabs" :key="tab">
      <PageList></PageList>
    </TabPane>
    <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>

  </Tabs>
</template>
<script>
  import PageList from './PageList/PageList.vue'

  export default {
    props: ['selected'],
    async beforeMount() {

    },
    data() {
      return {
tabs:2
      }
    },
    components: {
      PageList
    },

    methods:{
      handleTabsAdd () {
this.tabs++
      }
    }

  }
</script>

<style lang="less" scoped>
  .inner {
    width: 100%;
    height: 100%;
    border: 1px solid red
  }
</style>

<template>
  <Tabs value="name1">
    <!--<TabPane :label="tab.lv" :name="tab.lv" v-for="tab in levels" :key="tab.lv">-->
    <!--<PageList></PageList>-->
    <!--</TabPane>-->
  </Tabs>
</template>
<script>
  import PageList from './PageList/PageList.vue'
  import axios from 'axios'

  export default {
    props: ['selected'],
    async beforeMount() {

//    let res = await axios.get(window.location.protocol + "//" + window.location.hostname + ':9000/api/bread');
      //    console.log(res);
    },
    data() {
      return {
        label: (h) => {
          return h('div', [
            h('span', '标签一'),
            h('Badge', {
              props: {
                count: 3
              }
            })
          ])
        },
        tags: []
      }
    },
    components: {
      PageList
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

<template>
  <Tabs>
    <TabPane :label="item.level" :name="item.level" v-for="item in levels" :key="item.level">
      <PageList :feedBackList="item.feedBacks"></PageList>
    </TabPane>
    <input slot="extra" class="add-level-input" placeholder="Add New Level" v-model="inputValue"/>
    <Button @click="handleTabsAdd" size="small" slot="extra" :disabled="!inputValue">增加</Button>
  </Tabs>
</template>
<script>
  import PageList from './PageList/PageList.vue'
  import api from '../api'

  export default {
    props: ['selected'],

    data() {
      return {
        inputValue: '',
        levels: [],
      }
    },
    watch: {
      selected: 'loadFeedBack'
    },

    components: {
      PageList
    },

    methods: {
      async handleTabsAdd() {
        let data = {
          level: this.inputValue,
          grade_name: this.selected.split('-')[0],
          lesson_name: this.selected.split('-')[1],
        };
        this.inputValue = '';

        let result =await api.lessons.addLesson(data);
        console.log(result);
        let reload = await api.lessons.getFeedBacks(data);
        this.levels = reload.data.data

      },
      async loadFeedBack() {
        let params =
          {
            grade_name: this.selected.split('-')[0],
            lesson_name: this.selected.split('-')[1],
          };

        let result = await api.lessons.getFeedBacks(params);
        if (/2/.test(result.status)) {
          this.levels = result.data.data
        }
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

  .add-level-input {
    margin-right: 10px;
    border-radius: 3px;
    outline: none;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 1.5;
    padding: 1px 7px 2px;

  }

  .add-level-input:focus {
    border-color: #57a3f3;
  }
</style>

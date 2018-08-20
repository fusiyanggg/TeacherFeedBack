import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Tab from '@/components/Tab'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [

        {
          path: 'tab',
          name: 'tab',
          component: Tab,
          props: true
        }
      ],

    },

  ]
})

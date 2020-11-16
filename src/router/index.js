import Vue from 'vue';
import Router from 'vue-router';
import ProjectView from '@/components/Project/View/ProjectView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/project',
      name: 'ProjectView',
      component: ProjectView,
    },
  ],
});

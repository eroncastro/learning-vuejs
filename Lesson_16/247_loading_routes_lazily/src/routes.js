import Home from './components/Home.vue';
import Header from './components/Header.vue';

// Lazy loading for imports that will be used by Webpack
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  }, 'user');
};

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  }, 'user');
};

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  }, 'user');
};

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  }, 'user');
};

export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      { path: '', component: UserStart },
      {
        path: ':id',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next();
        }
      },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ]
  },
  { path: '/redirect-me', redirect: { name: 'home' } },
  // * (star operator) catches everything that is not handled by the other routes
  { path: '*', redirect: { name: 'home' } }
];

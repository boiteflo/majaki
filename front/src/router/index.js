import Vue from 'vue'
import VueRouter from 'vue-router'

let version = 'V0.0.1';

Vue.use(VueRouter)

Vue.prototype.$version = version;

const routes = [
    {
        path: '/error/:id',
        name: version + ' majaki Error',
        component: () =>
            import ('../pages/pageError.vue')
    },
    {
        path: '/success/:id',
        name: version + ' majaki Succes',
        component: () =>
            import ('../pages/pageSuccess.vue')
    },
    {
        path: '/contact',
        name: version + ' majaki Contact',
        component: () =>
            import ('../pages/pageContact.vue')
    },
    {
        path: '/depositAdd',
        name: version + ' majaki Contact',
        component: () =>
            import ('../pages/pageDepositAdd.vue')
    },
    {
        path: '/depositEdit',
        name: version + ' majaki Contact',
        component: () =>
            import ('../pages/pageDepositEdit.vue')
    },
    {
        path: '/depositList',
        name: version + ' majaki Contact',
        component: () =>
            import ('../pages/pageDepositList.vue')
    },
    {
        path: '/depositView',
        name: version + ' majaki Contact',
        component: () =>
            import ('../pages/pageDepositView.vue')
    },
    {
        path: '/login',
        name: version + ' majaki Contact',
        component: () =>
            import ('../pages/pageLogin.vue')
    },
    {
        path: '/homeLogged',
        name: version + ' majaki Contact',
        component: () =>
            import ('../pages/pageHomeLogged.vue')
    },
    {
        path: '/*',
        name: version + ' majaki',
        component: () =>
            import ('../pages/pageHome.vue')
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
  });


export default router

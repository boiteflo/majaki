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
        name: version + ' majaki Ajout Dépot',
        component: () =>
            import ('../pages/pageDepositAdd.vue')
    },
    {
        path: '/depositEdit',
        name: version + ' majaki Modifier Dépot',
        component: () =>
            import ('../pages/pageDepositEdit.vue')
    },
    {
        path: '/depositList',
        name: version + ' majaki Liste Dépot',
        component: () =>
            import ('../pages/pageDepositList.vue')
    },
    {
        path: '/depositView',
        name: version + ' majaki Voir Dépot',
        component: () =>
            import ('../pages/pageDepositView.vue')
    },
    {
        path: '/login',
        name: version + ' majaki Se connecter',
        component: () =>
            import ('../pages/pageLogin.vue')
    },
    {
        path: '/account',
        name: version + ' majaki Mon compte',
        component: () =>
            import ('../pages/pageAccount.vue')
    },
    {
        path: '/logout',
        name: version + ' majaki Se déconnecter',
        component: () =>
            import ('../pages/pageLogout.vue')
    },
    {
        path: '/board',
        name: version + ' majaki Accueil',
        component: () =>
            import ('../pages/pageBoard.vue')
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

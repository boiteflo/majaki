import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueToastr from "vue-toastr";

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    moveUrl(url){
      if(window.location.href === url)
        window.location.reload();
      else
        window.location.href =url;
    },
    isMobileScreen(){
      return this.$vuetify.breakpoint.width < 900;
    }
  },
})

Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

new Vue({
  vuetify,
  router,
  render: h => h(App),
  mounted() {
    this.$toastr.defaultPosition = "toast-bottom-center";
  }
}).$mount('#app')

<template>
  <v-app>
    <menuBar :user="store.user"></menuBar>
    <div style="height:64px;"></div> <!--Place nécessaire pour la MenuBar-->    
    <router-view></router-view>

    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column separation" color="#003A3E">
      <div class="flex">
          <link-button  
              v-for="icon in icons"
              :key="icon.icon"
              :url="icon.url"  
              :icon="icon.icon"
              :external="true"
              :buttonclass="{transparentBg:true}"
              class="m10px">
            </link-button>
      </div>

      <p class="pt-0 colorWhite" >
        Ce site web est spécifiquement conçu comme une vitrine dédiée à la présentation d'une technologie particulière. Grâce à une conception épurée et une navigation intuitive, le site vise à offrir une expérience utilisateur optimale tout en offrant un aperçu complet de la technologie présentée.
      </p>

      <v-divider></v-divider>

      <div class="colorWhite">
        02/01/2024 — Front VueJS et Back Express (NodeJs) - Par <strong>Florent Banquart</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<style>
  @import './style.css';
</style>

<script>
import { store } from './data/store.js'
import menuBar from './components/menuBar';
import linkButton from './components/linkButton';

export default {
  name: 'App',

  components: {
    menuBar, linkButton
  },

  data: () => ({
    store: store,
    icons: [
        {icon:'mdi-git', url:'https://github.com/boiteflo/majaki'},
        {icon:'mdi-server', url:'https://dashboard.render.com/web/srv-cm8olv0cmk4c73932f3g'},
        {icon:'mdi-file-document', url:'https://drive.google.com/file/d/1VYlhPxHYeI2Zhj0W90Ohk8zH_VoKhH2u/view?usp=sharing'},
        {icon:'mdi-file-excel', url:'https://docs.google.com/spreadsheets/d/1w1t80zHvJi1o5f0pDKiZWpJ26oLREHZv0hUh_urfUu0/edit?usp=sharing'},
      ]
  }),
  
  mounted() {
  },
  methods: {
  }
};
</script>

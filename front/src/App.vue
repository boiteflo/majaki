
<template>
  <v-app>
    <menuBar></menuBar>
    <div v-if="$vuetify.breakpoint.width >= 800" class="bg" style="height:60px;"></div> <!--Place nécessaire pour la MenuBar-->    
    <router-view></router-view>

    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column separation" color="#003A3E">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          style="background:#00000000"
        >
            <v-icon class="colorWhite" v-if="icon">{{icon}}</v-icon>
        </v-btn>
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
import menuBar from './components/menuBar';

export default {
  name: 'App',

  components: {
    menuBar
  },

  data: () => ({
    icons: [
        'mdi-git',
        'mdi-server',
        'mdi-facebook',
        'mdi-twitter',
      ]
  }),
  
  mounted() {
  },
  methods: {
  }
};
</script>

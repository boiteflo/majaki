
<template>
  <v-app>
    <menuBar></menuBar>
    <div v-if="$vuetify.breakpoint.width >= 800" class="bg" style="height:60px;"></div> <!--Place nécessaire pour la MenuBar-->    
    <router-view></router-view>
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
  }),
  
  mounted() {
  },
  methods: {
  }
};
</script>

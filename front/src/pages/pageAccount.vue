<template>
    <div class="pageTop">
      <h1>Mon Compte {{ store.user.Name }}</h1>
    </div>
  </template>
  
  
  <script>
  import router from '../router'
  import { store } from '../data/store.js'
  
  export default {
  name: 'pageBoard',
  data: () => ({
      store: store
  }),
  mounted() {
    if(!store.user)
      router.push('login')
  },
  methods: {
    
  }
  };
  </script>
  
  
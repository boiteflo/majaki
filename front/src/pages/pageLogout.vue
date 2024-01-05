<template>
    <div></div>
</template>

<script>
import router from '../router'
import { store } from '../data/store.js'

export default {
  name: 'pageLogout',
  mounted() {
    store.user =null;
    router.push('home')
  }
};
</script>


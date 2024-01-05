<template>
  <div class="pageTop">
    Board
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


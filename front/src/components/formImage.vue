<template> 
    <div class="flex flex-align-center m10px">
    <div class="flex-grow" v-if="$vuetify.breakpoint.width > 800">
      <img class="w100p" :src="image" alt="Image"  >
    </div>
    <div class="flex-grow flex-center">
        <slot>            
        </slot>
    </div>
</div>
</template>

<script>
  export default {
    name: 'form-image',
    props: ['image']
  }
</script>

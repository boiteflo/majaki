<template> 
    <div class="flex m10px" style="justify-content: space-evenly;">
    <div v-if="$vuetify.breakpoint.width > 800">
      <img class="w100p" :src="image" alt="Image" style="max-width: 450px; max-height: 450px;"  >
    </div>
    <div class="flex-center">
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

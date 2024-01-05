<template> 
    <div class="flex flex-align-center m5px">
    <div class="flex-grow" v-if="$vuetify.breakpoint.width > 800">
      <img class="w100p" :src="image" alt="Image"  >
    </div>
    <div class="flex-grow flex-center">
        <v-card class="m5px" style="min-width: 350px;" elevation="9">
          <v-card-title>{{title}}</v-card-title>
          <v-card-text>
            <slot name="main"></slot>
          </v-card-text>
          <v-card-actions>
            <slot name="actions"></slot>
          </v-card-actions>
        </v-card>
    </div>
</div>
</template>

<script>
  export default {
    name: 'form-image',
    props: ['image', 'title']
  }
</script>

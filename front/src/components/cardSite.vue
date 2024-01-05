<template> 
    <v-card :class="{m5px:true, color4Bg:green}" 
       elevation="6" 
       style="min-width: 250px;">
      <v-card-title>{{site.Name}}</v-card-title>
      <v-card-text>
        <span class="color2"><u>Déchets acceptés</u> : </span>
        {{ site.WasteText }}
        <div v-if="actions">        
          <div class="myd5px"><v-icon>mdi-phone</v-icon><span>{{ site.Phone }}</span></div>
          <div class="myd5px"><v-icon>mdi-email</v-icon><span>{{ site.Mail }}</span></div>
          <div class="myd5px"><v-icon>mdi-google-maps</v-icon><span>{{ site.Address }}</span></div>
        </div>
      </v-card-text>
    </v-card>
</template>

<script>
  export default {
    name: 'card-site',
    props: ['site', 'actions', 'green']
  }
</script>

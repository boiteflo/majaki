<template> 
    <div class="">
        <a :href="url" v-if="external" target="_blank">
            <v-btn
            :class="buttonclass"
            target=""
            @click="$emit('click')"
            >
            <v-icon class="colorWhite" v-if="icon">{{icon}}</v-icon>
            <span class="ml5px colorWhite">{{text}}</span>
            </v-btn>
        </a> 

        <router-link :to="url" v-else>
            <v-btn
            :class="buttonclass"
            target="_blank"
            text
            @click="$emit('click')"
            >
            <v-icon class="colorWhite" v-if="icon">{{icon}}</v-icon>
            <span class="ml5px colorWhite" >{{text}}</span>
            </v-btn>
        </router-link>
    </div>

</template>

<script>
  export default {
    name: 'link-button',
    props: ['url', 'external', 'text', 'icon', 'buttonclass']
  }
</script>

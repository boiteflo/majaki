<template>
    <div class="pageTop separation">
      <div class="flex flex-responsive flex-space-around">
        <v-card class="m10px" elevation="8">
          <v-card-title>Se Connecter</v-card-title>
          <v-card-text>
            <div>
              <v-text-field class="m5px" label="Mail" v-model="mail" ></v-text-field>
              <v-text-field class="m5px" label="Mot de passe" v-model="password" type="password"></v-text-field>
            </div>
           <v-chip color="error" class="m10px w100p" v-if="error">{{ error }}</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn><v-icon>mdi-lock-reset</v-icon>Changer le mot de passe</v-btn>
            <v-btn color="primary" @click="tryLogin"><v-icon>mdi-login</v-icon> Se Connecter</v-btn>
          </v-card-actions>
        </v-card>
        
        <img v-if="false && $vuetify.breakpoint.width > 800" class="w300" :src="require('../assets/authentication.jpg')" />
      </div>
    </div>
</template>


<script>
import router from '../router'
import { store } from '../data/store.js'
import serviceBack from '../services/serviceBack'

export default {
  name: 'pageLogin',
  data: () => ({
      store: store,
      mail: 'banquartflorent@yopmail.com',
      password:'test',
      error:''
  }),
  methods: {
    async tryLogin(){
        this.error = "";
      const md5 = require('md5');
      const response = await serviceBack.post('login', {Mail:this.mail, Password:md5(this.password)});
      if (!response.data){
        this.error = "non";
        return;
      }

      store.user = response.data;
      router.push('board')
    }
  }
};
</script>


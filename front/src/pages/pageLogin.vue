<template>
    <div class="pageTop separation">
      <form-image-card :image="require('../assets/authentication.jpg')" title="Se Connecter">
        <template v-slot:main>
          <v-text-field class="m5px" label="Mail" v-model="mail" ></v-text-field>
          <v-text-field class="m5px" label="Mot de passe" v-model="password" type="password"></v-text-field>
        </template>
        <template v-slot:actions>
          <v-btn><v-icon>mdi-lock-reset</v-icon>Changer le mot de passe</v-btn>
          <v-btn color="primary" @click="tryLogin"><v-icon>mdi-login</v-icon> Se Connecter</v-btn>
        </template>
      </form-image-card>
    </div>
</template>


<script>
import router from '../router'
import { store } from '../data/store.js'
import serviceBack from '../services/serviceBack'

import formImageCard from '../components/formImageCard';

export default {
  name: 'pageLogin',
  components: {formImageCard},
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


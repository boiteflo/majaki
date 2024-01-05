<template>
    <div class="pageTop">
      <v-stepper v-model="step" class="m5px" vertical>
        <v-stepper-items>
          
          <v-stepper-step :complete="step > 1" step="1" @click="moveStep(1)" > Utilisateur à l'origine du Dépot : <span class="color2">{{ deposit.AuthorName }} ({{ deposit.AuthorEmail }})</span></v-stepper-step>
          <v-stepper-content step="1">             
            <form-image-card :image="require('../assets/user.jpg')" title="Utilisateur">
              <template v-slot:main>
                <v-text-field hide-details prepend-inner-icon="mdi-card-account-details" label="Nom Prénom" v-model="deposit.AuthorName"></v-text-field>
                <v-text-field hide-details prepend-inner-icon="mdi-email" label="Email" v-model="deposit.AuthorEmail"></v-text-field>
              </template>
              <template v-slot:actions>          
                <div class="flex-reverse w100p">
                    <v-btn class="m5px" @click="validateUser">Suivant</v-btn>
                  </div>
              </template>
            </form-image-card>            
          </v-stepper-content>
          
          <v-stepper-step :complete="step > 2" step="2" @click="moveStep(2)" > Chantier </v-stepper-step>
          <v-stepper-content step="2">             
            <form-image-card :image="require('../assets/img2.jpg')" title="Chantier">
              <template v-slot:main>
                <v-text-field hide-details prepend-inner-icon="mdi-map-marker" label="Adresse"></v-text-field>
              </template>
              <template v-slot:actions>          
                <div class="flex-reverse w100p">
                    <v-btn class="m5px" @click="validateYard">Suivant</v-btn>
                  </div>
              </template>
            </form-image-card>            
          </v-stepper-content>

          <v-stepper-step :complete="step > 3" step="3" @click="moveStep(3)" > Producteur de déchet </v-stepper-step>
          <v-stepper-content step="3">             
            <form-image-card :image="require('../assets/img4.jpg')" title="Producteur de déchet">
              <template v-slot:main>
                <v-text-field hide-details prepend-inner-icon="mdi-card-account-details" label="Nom Prénom ou Raison Social"></v-text-field>
                <v-text-field hide-details prepend-inner-icon="mdi-domain" label="Siret"></v-text-field>
                <v-text-field hide-details prepend-inner-icon="mdi-map-marker" label="Adresse"></v-text-field>
                <v-text-field hide-details prepend-inner-icon="mdi-email" label="Email"></v-text-field>
                <v-text-field hide-details prepend-inner-icon="mdi-phone" label="Téléphone"></v-text-field>
              </template>
              <template v-slot:actions>          
                <div class="flex-reverse w100p">
                    <v-btn class="m5px" @click="validateWasteProducer">Suivant</v-btn>
                  </div>
              </template>
            </form-image-card>
          </v-stepper-content>

          <v-stepper-step :complete="step > 4" step="4" @click="moveStep(4)" > Client </v-stepper-step>
          <v-stepper-content step="4">             
            <form-image-card :image="require('../assets/img4.jpg')" title="Client">
              <template v-slot:main>
                <v-text-field hide-details prepend-inner-icon="mdi-card-account-details" label="Nom Prénom ou Raison Social"></v-text-field>
                <v-text-field hide-details prepend-inner-icon="mdi-domain" label="Siret"></v-text-field>
                <v-text-field hide-details prepend-inner-icon="mdi-map-marker" label="Adresse"></v-text-field>
                <v-text-field hide-details prepend-inner-icon="mdi-email" label="Email"></v-text-field>
                <v-text-field hide-details prepend-inner-icon="mdi-phone" label="Téléphone"></v-text-field>
              </template>
              <template v-slot:actions>          
                <div class="flex-reverse w100p">
                    <v-btn class="m5px" @click="validateWasteProducer">Suivant</v-btn>
                  </div>
              </template>
            </form-image-card>
          </v-stepper-content>

          <v-stepper-step :complete="step > 5" step="5" @click="moveStep(5)" > Site </v-stepper-step>
          <v-stepper-content step="5">
            Site
          </v-stepper-content>

          <v-stepper-step :complete="step > 6" step="6" @click="moveStep(6)" > Déchets </v-stepper-step>
          <v-stepper-content step="6">
            Déchets
          </v-stepper-content>

          <v-stepper-step  step="7" > Résumé </v-stepper-step> 
          <v-stepper-content step="7">       
            Résumé
          </v-stepper-content>

        </v-stepper-items>
      </v-stepper>     
      {{ deposit }} 
    </div>
</template>

<style scoped>
.v-stepper__content {padding: 0px !important;}
.v-text-field {margin:5px !important;}
</style>

<script>
import formImageCard from '../components/formImageCard';
import { store } from '../data/store.js'

export default {
  name: 'pageDepositAdd',
  components: {formImageCard},
  data: () => ({
      store: store,
      step: 1,
      deposit: {AuthorEmail:null}
  }),
  mounted(){
    if(store.user){
      this.deposit.AuthorEmail = store.user.Mail;
      this.deposit.AuthorName = store.user.Name;
      this.step = 2;
    }
  },
  methods: {
    moveStep(value){
      if(value > this.step){
        alert("Cette étape n'est pas encore disponible");
        return;
      }
      this.step = value;
    },  
    validateUser(){
      this.step++;
    },
    validateYard(){
      this.step++;
    },
    validateWasteProducer(){
      this.step++;
    },
    validateWasteOwner(){
      this.step++;
    },
    validateCustomer(){
      this.step++;
    },
    validateSite(){
      this.step++;
    },
    validateWasteList(){
      this.step++;
    },
    validateAll(){

    }
  }
};
</script>

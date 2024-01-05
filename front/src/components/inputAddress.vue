<template> 
    <div>
    <v-dialog v-model="popup"
              width="80%"
              height="90%"
              persistent>
        <v-btn v-on:click="closePopup">
            <v-icon style="margin:5px;">
                mdi-cancel
            </v-icon>
            Annuler
        </v-btn>
        <div style="background: white;" class="py-2">
            <v-alert v-if="error" type="error" class="mx-2">
                {{error}}
            </v-alert>
            <div v-if="isauto">
                <div class="mx-2">
                    <v-text-field ref="focuselement"
                                  label="Adresse"
                                  v-model="selectedAddress"
                                  @input="callApi"
                                  :rules="[v => !!v || 'L adresse est obligatoire']"
                                  validate-on-blur>
                    </v-text-field>
                </div>
                <div style="min-height: 160px; box-sizing: border-box;">
                    <v-expand-transition>
                        <div v-show="showProposition">
                            <v-card-title class="p5px">Veuillez sélectionner une adresse dans la liste ci-dessous :</v-card-title>
                            <div class="flex flex-wrap">
                                <v-chip :color="address == selectedAddress ? 'success' : 'gray'"
                                        v-for="address in addressListString"
                                        :key="address"
                                        v-on:click="selectAddress(address)"
                                        style="width:48%;" class="m5px" size="small">
                                    {{address}}
                                </v-chip>
                            </div>
                        </div>
                    </v-expand-transition>
                    <v-expand-transition>
                        <div v-show="!showProposition && result && result.Ville">
                            <v-text-field class="mx-2"
                                          label="Complément d'adresse"
                                          v-model="result.Additional"
                                          v-on:change="reformatAddress">
                            </v-text-field>
                        </div>
                    </v-expand-transition>
                </div>
            </div>
            <div v-else>
                <div class="flex flex-wrap">
                    <v-text-field ref="focuselement"
                                  class="my-2 p-2 width50p"
                                  label="Adresse"
                                  v-model="result.Street"
                                  :rules="[v => !!v || 'L adresse est obligatoire']"
                                  validate-on-blur>
                    </v-text-field>
                    <v-text-field class="my-2 p-2 width50p"
                                  label="Complément d'adresse'"
                                  v-model="result.Additional"
                                  validate-on-blur>
                    </v-text-field>
                    <v-text-field class="my-2 p-2 width50p"
                                  label="Code postal"
                                  v-model="result.PostCode"
                                  :rules="[v => !!v || 'Le code postal est obligatoire']"
                                  validate-on-blur>
                    </v-text-field>
                    <v-text-field class="my-2 p-2 width50p"
                                  label="Ville"
                                  v-model="result.City"
                                  :rules="[v => !!v || 'La ville est obligatoire']"
                                  validate-on-blur>
                    </v-text-field>
                </div>
            </div>
            <div class="m-3 flex-reverse" style="flex-wrap: wrap">
                <v-btn :disabled="!result || !result.Ville"
                       class="ma-2"
                       color="primary"
                       v-on:click="confirmAddress">
                    Valider
                </v-btn>
                <v-btn class="ma-2"
                       v-on:click="closePopup">
                    Annuler
                </v-btn>
                <v-btn class="ma-2"
                       v-on:click="switchMode">
                    {{isauto ? 'Saisir l\'adresse manuellement' : 'Saisir l\'adresse automatiquement' }}
                </v-btn>
            </div>
        </div>
    </v-dialog>
    <div class="flex" style="align-items:baseline">
        <v-text-field v-if="readonly" 
                      class="mx-2"
                      label="Adresse"
                      prepend-inner-icon="mdi-map-marker"
                      v-model="result.Address"
                      :rules="[v => !!v || 'L adresse est obligatoire']"
                      disabled>
        </v-text-field>
        <v-text-field v-else
                      class="mx-2"
                      label="Adresse"
                      prepend-inner-icon="mdi-map-marker"
                      v-model="result.Address"
                      @click="showPopup"
                      @focus="showPopupFocus"
                      :rules="[v => !!v || 'L adresse est obligatoire']"
                      readonly>
        </v-text-field>
        <template v-if="!readonly">
            <v-tooltip top color="#000000">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn style="width:20px; height:20px; margin:10px; margin-left:-30px"
                           depressed fab small color="secondary"
                           v-on:click="showPopup"
                           @focus="showPopupFocus"
                           v-bind="attrs"
                           v-on="on">
                        <v-icon style="font-size:16px;">
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                </template>
                <span>Cliquez ici pour renseigner l'adresse.</span>
            </v-tooltip>
        </template>
    </div>
</div>
</template>

<script>
const axios = require('axios');

  export default {
    name: 'input-address',
    props: ['readonly', 'obj', 'propStreet', 'propAdditional', 'propPostCode', 'propCity', 'propCoordinate', 'propInsee'],
    data() {
        return {
            error: null,
            loading: false,
            isauto: true,
            popup: false,
            addressList: null,
            addressListString: [],
            selectedAddress: null,
            result: {},
            stopOpenPopupOnFocus: false,
            showProposition: false,
            lastSearch:''
        }
    },
    mounted() {
        this.setAddress(this.obj);
    },
    watch: {
        obj(val) {
            this.setAddress(val);
        },
    },
    methods: {
        showPopupFocus() {
            if (this.stopOpenPopupOnFocus)
                return;

            this.stopOpenPopupOnFocus = this.obj[this.propStreet];
            this.showPopup();
        },
        showPopup() {
            this.popup = true;
            this.setFocus();
        },
        closePopup() {
            this.popup = false;
        },
        setFocus() {
            setTimeout(() => this.$refs.focuselement.focus(), "10");
        },
        switchMode() {
            this.isauto = !this.isauto;
            if (!this.isauto)
                this.getCities(this.result.CodePostal);
            this.setFocus();
        },
        setAddress(val) {
            if (!val || !val.Adresse)
                return;

            this.result = {
                Street: val[this.propStreet] ?? '',
                Additional: val[this.propStreet] ?? '',
                PostCode: val[this.propStreet] ?? '',
                City: val[this.propStreet] ?? '',
                Coordinate: val[this.propCoordinate] ?? '',
                CodeInsee: val[this.propInsee] ?? ''
            };
            this.reformatAddress();
            this.selectedAddress = this.result.AdresseSansComplement;
            this.addressList = [this.result];
            this.addressListString = [this.selectedAddress];
        },
        selectAddress(val) {
            if (val === this.result.AdresseSansComplement)
                return;

            let result = {};
            if (this.addressList)
                result = this.addressList.find(x => x.AdresseSansComplement === val);

            this.result = result ?? {};
            this.selectedAddress = result?.AdresseSansComplement;
            this.showProposition = result ? false : true;
        },
        reformatAddress() {
            this.result.AdresseComplete = this.formatAdress(this.result, true);
            this.result.AdresseSansComplement = this.formatAdress(this.result, false);
        },
        formatAdress(obj, includeComplement) {
            if (!obj) return "";
            let adressComplement = includeComplement && obj.AdresseComplement ? ` ${obj.AdresseComplement}` : '';
            return `${obj.Adresse}${adressComplement} ${obj.CodePostal} ${obj.Ville}`;
        },
        confirmAddress() {
            this.reformatAddress();
            this.popup = false;
            this.$emit('select', this.result);
        },
        getCities(val) {
            if (this.loading || !val || val.length < 5)
                return;

            this.loading = true;
            this.error = null;
            let url = `https://api-adresse.data.gouv.fr/search/?q=${val}&type=municipality`;

            axios.get(url).then(response => {
                if (!response.data.features || response.data.features.length < 1)
                    return;

                this.cities = response.data.features.map(x => {
                    return {
                        Ville: x.properties.city,
                        Coordonnees: [x.geometry.coordinates[1], x.geometry.coordinates[0]],
                    };
                });
                this.citiesString = this.cities.map(x => x.Ville);
                let selectCity = this.result.Ville && this.result.Ville.length > 0 && this.citiesString.includes(this.result.Ville)
                    ? this.result.Ville
                    : this.citiesString[0];

                this.selectCity(selectCity);
            }, error => {
                this.error = error;
            }, 'loading', true);
        },
        selectCity(val) {
            if (!val)
                return;

            let city = this.cities.find(x => x.Ville === val);
            if (!city)
                return;

            this.result.Coordonnees = city.Coordonnees;
            this.result.Ville = city.Ville;
        },
        tryToGuessAddressComplement(val) {
            let match;
            this.addressListString.forEach(address => {
                if (match) return;

                match = this.getStringMatch(val, address);
                if (match) {
                    this.selectAddress(match.target);
                    this.result.AdresseComplement = match.extra;                                             
                    return;
                }
            });
            return match;
        },
        getStringMatch(sourceWithExtra, target) {
            if (sourceWithExtra == target)
                return { target: target, extra: '' }; // The 2 strings are exactly the same

            let arraySource = sourceWithExtra.split(' ');
            let arrayTarget = target.split(' ');

            let missingItem = arrayTarget.find(x => !arraySource.includes(x));
            if (missingItem)
                return null; // All the target string must be inside the source

            if (arraySource.length == arrayTarget.length)
                return { target: target, extra: '' }; // The 2 strings are exactly the same

            let cut = 0;
            let cutBegin = 0;
            let cutEnd = 0;
            let indexSource= 0;

            for (let indexTarget = 0; indexTarget < arrayTarget.length; indexTarget++) {

                let isSame = arrayTarget[indexTarget] == arraySource[indexSource];
                if (isSame) {
                    indexSource++;
                }
                else {
                    if (cut > 0)
                        return null; // Only 1 cut is allowed

                    cut++;
                    cutBegin = indexSource;
                    while (indexSource < arraySource.length && arrayTarget[indexTarget] != arraySource[indexSource])
                        indexSource++;

                    if (arrayTarget[indexTarget] != arraySource[indexSource])
                        return null; // End must match

                    cutEnd = indexSource;
                    indexSource++;
                }
            }

            if (indexSource < arraySource.length)
                return null; // End not match because source have a lot of things after the end of the target string

            let extra = '';
            for (let i = cutBegin; i < cutEnd; i++)
                extra += arraySource[i] + ' ';
            extra = extra.substring(0, extra.length - 1);

            return { target: target, extra };
        },
        callApi(val) {
            if (!val || val.length < 6)
                return;

            this.loading = true;
            this.error = null;
            let url = `https://api-adresse.data.gouv.fr/search/?q=${val}&type=&autocomplete=1&limit=10`;

            axios.get(url).then(response => {
                this.loading = true;
                console.log(response.data);
                if (!response.data.features || response.data.features.length < 1)
                    return;

                this.addressList = response.data.features.map(x => {
                    return {
                        AdresseSansComplement: x.properties.label,
                        Coordonnees: [x.geometry.coordinates[1], x.geometry.coordinates[0]],
                        CodePostal: x.properties.postcode,
                        Ville: x.properties.city,
                        Adresse: x.properties.name,
                        CodeInsee: x.properties.citycode
                    }
                });
                this.loading = false;

                this.addressListString = this.addressList.map(x => x.AdresseSansComplement);
                if (this.addressListString.length < 1)
                    return;

                let matchFinded = this.tryToGuessAddressComplement(val);
                if (!matchFinded)
                    setTimeout(() => this.showProposition = true, 10);

                this.lastSearch = val;
            }, error => {
                this.error = error;
            }, 'loading', true);
        }
    }
  }
</script>

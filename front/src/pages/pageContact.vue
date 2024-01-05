<template>
    <div>
      <div v-if="markers" class="flex flex-responsive">
        <div class="flex-grow">
          <inputMap :markers="markers" @select="selectMarker">
            <template slot-scope="{marker}">
              <h2>{{marker.site.Name}}</h2>
            </template>
          </inputMap>
        </div>
        <div style="width:300px; ">          
          <card-site v-if="selectedSite" :site="selectedSite" :green="true" :actions="true">
          </card-site>

          <card-site v-for="site in sites.filter(x=> x.Id != selectedSite?.Id)" 
            :key="site.Id"
            :site="site"
            :actions="true">
          </card-site>
        </div>
      </div>
    </div>
</template>

<script>
import serviceBack from '../services/serviceBack'

import inputMap from '../components/inputMap';
import cardSite from '../components/cardSite';

export default {
  name: 'pageContact',
  components: {
    inputMap, cardSite
  },
  data: () => ({
    sites:null,
    wastes:null,
    markers: null,
    selectedSite:null
  }),
  mounted() {
    this.refresh();
  },
  methods: {
    async refresh(){
      this.wastes = await serviceBack.getAll('waste');
      const sites = await serviceBack.getAll('site');
      this.sites = sites.map(x=> ({...x, WasteText: this.getWasteText(x)}));
      this.markers = this.sites.map(x=>this.toMarker(x));
    },
    toMarker(site){
      return {
        id: site.Id,
        coord: site.Coordinate,
        site: site
      }
    },
    selectMarker(marker){
      this.selectedSite =marker.site;
    },
    getWasteText(site){
      return this.wastes.filter(x=> site.Waste.includes(x.Ref)).map(x=>x.Name).join(', ');
    }
  }
};
</script>

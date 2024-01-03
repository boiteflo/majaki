<template>
    <div>
      <div v-if="markers" class="flex flex-responsive">
        <div class="flex-grow">
          <inputMap :markers="markers" @select="selectMarker">
          </inputMap>
        </div>
        <div style="width:300px">
          <div v-if="selected" v-html="getLabelHtml(selected)"></div>
          <div v-for="site in sites" :key="site.Id" v-html="getLabelHtml(site)"></div>
        </div>
      </div>
    </div>
</template>


<script>
import serviceBack from '../services/serviceBack'

import inputMap from '../components/inputMap';

export default {
  name: 'pageContact',
  components: {
    inputMap
  },
  data: () => ({
    sites:null,
    wastes:null,
    markers: null,
    selected:null
  }),
  mounted() {
    this.refresh();
  },
  methods: {
    async refresh(){
      this.sites = await serviceBack.getAll('site');
      this.wastes = await serviceBack.getAll('waste');
      this.markers = this.sites.map(x=>this.toMarker(x));
    },
    toMarker(site){
      return {
        id: site.Id,
        name:site.Ref,
        coord: site.Coordinate,
        label: this.getLabelHtml(site),
        Name: site.Name,
        Waste: site.Waste
      }
    },
    selectMarker(marker){
      this.selected = this.sites.find(x=> x.Id === marker.id);
    },
    getLabelHtml(siteOrMarker){
      //const wastes = 
      const chips = siteOrMarker.Waste.map(x=> '<div class="m5px color2Bg borderRadius colorWhite text-center" style="width:60px">' + x + '</div>').join(' ');
      return '<h1>'+ siteOrMarker.Name + '</h1><p>Déchets acceptés :<p><div class="flex">' + chips + "</div>";
    }
  }
};
</script>

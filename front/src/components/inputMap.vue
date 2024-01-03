<template>
    <div>
        <l-map ref="map" :zoom="zoom" :center="center" :constrainResolution="true" style="min-height: 500px; height: 100%; min-width: 500px;">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker v-for="marker in markers"
                :key="marker.name"
                :lat-lng="getCoord(marker.coord)" 
                :icon="icon()"
                v-on:click="selectMarker(marker)">
                <l-tooltip v-if="marker">
                    <div v-html="marker.label"></div>
                </l-tooltip>
            </l-marker>
            <l-marker v-if="sidemarker" :lat-lng="getCoord(sidemarker.coord)" :icon="icon()">
                <l-tooltip>
                    <div v-html="sidemarker.label"></div>{{sidemarker.label}}
                </l-tooltip>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet';

  export default {
    name: 'input-map',
    props: ['markers', 'sidemarker'],
    components: { LMap, LTileLayer, LMarker, LTooltip},
    data() {
        return {
            zoom: 5.45,
            center: L.latLng(47, 1.7191),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        }
    },
    mounted() {
        var myMap = this.$refs.map.mapObject;
        this.refreshMap(myMap);
    },
    methods: {
        refreshMap(map) {
            setTimeout(function () {
                map.invalidateSize()
            }, 1);
        },
        selectMarker(marker) {
            this.$emit('select', marker);
            this.zoom = 6;
            this.center = L.latLng(47, 1.7191);
        },
        getCoord(coord) {
            if (!coord || coord.length < 3) return null;

            coord = coord.split(",");
            if (coord.length < 2) return null;

            var lat = coord.splice(0, 1).join("");
            var lng = coord.join(",");
            return L.latLng(lat, lng);
        },
        getIcon() {
            return this.redIcon;
        },
        icon() {
            return L.icon({
                iconUrl: require('../assets/markerLogo.png'),
                shadowUrl: require('../assets/shadow.png'),
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }
    },
  }
</script>

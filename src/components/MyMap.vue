<template>
    <l-map id="map" ref="map" v-model:zoom="zoom" :center="[40.619888, -73.917170]" zoomDelta=0.5 :maxBounds="[[40.522151, -74.381561],[40.951900, -73.26438]]" :minZoom=9 :options="{zoomControl: false}">
      <l-control-zoom> </l-control-zoom>
      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        layer-type="base"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      ></l-tile-layer>
  
      <l-marker v-for="record in remote_data.records" :key="record.id" :lat-lng="[record.fields.lat, record.fields.lng]" @click="setSelected(record.id)">
        <l-popup>
            <p class="font-bold mb-0">{{ record.fields.name }}</p>
            <ConditionTag :condition="record.fields.condition_selector" />
            <div class="prose text-sm mt-2 px-2 bg-gray-50">
              <span class="font-semibold">Crosstreets: </span>{{ record.fields.cross_streets }}

          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </template>
  <script setup>
  import { ref } from 'vue';
  import ConditionTag from '../components/ConditionTag.vue';
  import { LMap, LTileLayer, LMarker, LPopup, LControlZoom } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";
  
  const zoom = ref(12)
  defineProps(['remote_data']);  
  
  const selectedRecord = ref(null);
  function setSelected(id) {
    selectedRecord.value = id
  }

  defineExpose({
    selectedRecord
  })

  </script>

  <style scoped>
  #map {
    z-index: 1;
  }

  .leaflet-control-container { position: absolute; right: 56px }
  </style>
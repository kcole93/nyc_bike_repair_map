<template>
    <l-map id="map" ref="map" v-model:zoom="zoom" :center="map_center" zoomDelta=0.5 :maxBounds="[[40.407,-74.465],[41.321,-71.815]]" :minZoom=9 :maxZoom=19 :options="{zoomControl: false}">
      <l-control-zoom> </l-control-zoom>
      <l-tile-layer
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
        layer-type="base"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      ></l-tile-layer>
  
      <l-marker v-for="record in remote_data.records" :key="record.id" :lat-lng="[record.fields.lat, record.fields.lng]" ref="markerRef" :options="{title: record.fields.name, id: record.id}">
        <l-icon :icon-url="icon" :icon-size="iconSize" />
        <l-popup>
            <MyStationDetails :record="record" />
        </l-popup>
      </l-marker>
    </l-map>
  </template>

  <script setup>
  import { ref, watch } from 'vue';
  import ConditionTag from '../components/ConditionTag.vue';
  import MyStationDetails from '../components/MyStationDetails.vue';
  import { LMap, LTileLayer, LMarker, LPopup, LControlZoom, LIcon } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";
  import { selectedRecord } from '../components/composables/MapComposables';
  const zoom = ref(12)
  const props = defineProps(['remote_data']);

  const map = ref(null)
  const markerRef = ref([])

  const icon = "/BikeRepairIcon.svg";
  const iconSize = [64, 64];

  const map_center = ref([40.619888, -73.917170])

  function parseLatLng(record) {
    return [parseFloat(record.fields.lat), parseFloat(record.fields.lng)]
  }

  watch(selectedRecord, async (newRecord, oldRecord) => {
    if (newRecord != oldRecord) {
      let recordId = newRecord.id
      console.log(recordId)
      console.log(parseLatLng(newRecord))
      flyToTarget(newRecord, 15)
      let newMarker = markerRef.value.find((marker) => marker.options.id == recordId);
      newMarker.leafletObject.openPopup();
    }
  })

  function flyToTarget(record) {
      map.value.leafletObject.flyTo(parseLatLng(record), 15);
  }
  </script>

  <style scoped>
  #map {
    z-index: 1;
  }
  </style>
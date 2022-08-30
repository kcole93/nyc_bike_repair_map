<template>
    <l-map id="map" ref="map" v-model:zoom="zoom" :center="map_center" zoomDelta=0.5 :maxBounds="[[40.522151, -74.381561],[40.951900, -73.26438]]" :minZoom=9 :maxZoom=19 :options="{zoomControl: false}">
      <l-control-zoom> </l-control-zoom>
      <l-tile-layer
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
        layer-type="base"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      ></l-tile-layer>
  
      <l-marker v-for="record in remote_data.records" :key="record.id" :lat-lng="[record.fields.lat, record.fields.lng]" ref="markerRef" :options="{title: record.id}">
        <l-icon :icon-url="icon" :icon-size="iconSize" />
        <l-popup>
            <p class="font-bold mb-0">{{ record.fields.name }}</p>
            <ConditionTag :condition="record.fields.condition_selector" />
            <div class="prose text-sm mt-2 px-2">
              <span class="font-semibold">Crosstreets: </span>{{ record.fields.cross_streets }}
              <p>{{record.fields.notes}}</p>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </template>

  <script setup>
  import { ref, watch } from 'vue';
  import ConditionTag from '../components/ConditionTag.vue';
  import { LMap, LTileLayer, LMarker, LPopup, LControlZoom, LIcon } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";
  import { selectedRecord } from '../clientStore.js';
  import { center } from '../clientStore.js';
  import { useStore } from '@nanostores/vue';
  const zoom = ref(12)
  const props = defineProps(['remote_data']);

  const map = ref(null)
  const markerRef = ref([])

  const icon = "/BikeRepairIcon.svg";
  const iconSize = [64, 64];

  const $selectedRecord = useStore(selectedRecord);
  const $center = useStore(center);

  const currentRecord = ref($selectedRecord);

  const map_center = ref($center.value)

  function parseLatLng(record) {
    return [parseFloat(record.fields.lat), parseFloat(record.fields.lng)]
  }

  watch(currentRecord, async (newRecord, oldRecord) => {
    if (newRecord != oldRecord) {
      let recordId = newRecord.id
      console.log(recordId)
      console.log(parseLatLng(newRecord))
      flyToTarget(newRecord, 15)
      let newMarker = markerRef.value.find((marker) => marker.options.title == recordId);
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
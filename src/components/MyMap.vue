<template>
  <l-map
    id="map"
    ref="map"
    v-model:zoom="zoom"
    :center="map_center"
    zoomDelta="0.5"
    :maxBounds="[
      [40.407, -74.465],
      [41.321, -71.815]
    ]"
    :minZoom="9"
    :maxZoom="19"
    :options="{ zoomControl: false }"
  >
    <l-control-zoom> </l-control-zoom>
    <l-tile-layer
      :url="tileUrl"
      subdomains="abcd"
      layer-type="base"
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    ></l-tile-layer>

    <l-marker
      v-for="record in remote_data.records"
      :key="record.id"
      :lat-lng="[record.fields.lat, record.fields.lng]"
      ref="markerRef"
      :options="{ title: record.fields.name, id: record.id }"
    >
      <l-icon :icon-url="icon" :icon-size="iconSize" />
      <l-popup>
        <MyStationDetails :record="record" :showSubmitLink="true" />
      </l-popup>
    </l-marker>
  </l-map>
</template>

<script setup>
  import { ref, watch, computed } from 'vue'
  import { usePreferredDark } from '@vueuse/core'
  import ConditionTag from '../components/ConditionTag.vue'
  import MyStationDetails from '../components/MyStationDetails.vue'
  import {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LControlZoom,
    LIcon
  } from '@vue-leaflet/vue-leaflet'
  import 'leaflet/dist/leaflet.css'
  import { selectedRecord } from '../components/composables/MapComposables'

  const props = defineProps(['remote_data'])
  const isDark = usePreferredDark()

  // Leaflet Settings
  const zoom = ref(12)
  const map_center = ref([40.619888, -73.91717])
  const icon = '/BikeRepairIcon.svg'
  const iconSize = [64, 64]
  const tileUrl = computed(() => getTileProvider(isDark))

  // Return an appropriate tile provider based on user's dark/light mode preference
  function getTileProvider(isDark) {
    if (isDark.value) {
      return 'https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=de173d9dacee4c3580a76e11457c227c'
    } else {
      return 'https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=de173d9dacee4c3580a76e11457c227c'
    }
  }

  const map = ref(null)
  const markerRef = ref([])

  function parseLatLng(record) {
    return [parseFloat(record.fields.lat), parseFloat(record.fields.lng)]
  }

  // Watch the current value of selectedRecord, flying to the new record and opening its popup on changes (e.g., made in StationCard component)
  watch(selectedRecord, async (newRecord, oldRecord) => {
    if (newRecord != oldRecord) {
      flyToTarget(newRecord)
      // We need to target the ref of the appropriate L-Marker instance in order to access its openPopup function
      let newMarker = markerRef.value.find(
        (marker) => marker.options.id == newRecord.id
      )
      newMarker.leafletObject.openPopup()
    }
  })

  function flyToTarget(record, zoomLevel = 15) {
    map.value.leafletObject.flyTo(parseLatLng(record, zoomLevel))
  }
</script>

<style scoped>
  #map {
    z-index: 1;
  }

  @media (prefers-color-scheme: dark) {
    :deep(.leaflet-popup-content-wrapper) {
      background-color: rgb(51 65 85 / var(--tw-bg-opacity));
      color: whitesmoke;
    }

    :deep(.leaflet-popup-tip) {
      background-color: rgb(51 65 85 / var(--tw-bg-opacity));
    }

    :deep(.leaflet-popup-content-wrapper a) {
      color: rgb(254 215 170 / var(--tw-text-opacity));
    }
  }
</style>

<template>
  <div class="my-2 border-b-2 border-slate-200">
    <div class="m-4">
      <div class="align-center flex flex-wrap">
        <span class="mr-2 mb-0 font-bold">{{ station.fields.name }}</span>
        <ConditionTag :condition="station.fields.condition" class="align-right" />
      </div>
      <div id="amenities-wrapper" v-if="station.fields.amenities">
        <p class="text-semibold mt-1 mb-0">Amenities:</p>
        <div class="container prose mt-0 px-2">
          <ul>
            <li v-for="item in splitAmenities(station.fields.amenities)">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div id="notes-wrapper" v-if="station.fields.notes">
        <p class="font-semibold mt-1 mb-0">Notes:</p>
        <div class="container prose mt-0 px-2 bg-gray-50 rounded-6">
          {{ station.fields.notes }}
        </div>
      </div>
      <button
        class="mt-4 bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 border border-orange-700 rounded"
        @click="setSelected(station)"
      >
        Show on map
      </button>
    </div>
  </div>
</template>

<script setup>
  import ConditionTag from '../components/ConditionTag.vue'
  import { selectedRecord } from '../clientStore.js';
  import { useStore } from '@nanostores/vue';
  const props = defineProps(['station'])

  const $selectedRecord = useStore(selectedRecord);
  
  function setSelected(station) {
    selectedRecord.set(station)
  }

  function splitAmenities(amenities) {
    return amenities.split(',')
  }
</script>

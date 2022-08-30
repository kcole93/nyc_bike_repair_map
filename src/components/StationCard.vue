<template>
  <div class="my-2 border-b-2 border-slate-200">
    <div class="m-4">
      <div class="align-center flex flex-wrap">
        <span class="mr-2 mb-0 font-bold">{{ station.fields.name }}</span>
        <ConditionTag :condition="station.fields.condition" class="align-right" />
      </div>
      <div id="amenities-wrapper" v-if="station.fields.amenities">
        <p class="font-semibold text-sm mt-2 mb-0">Amenities:</p>
        <div class="container prose text-sm mt-0 px-2">
          <ul>
            <li v-for="item in splitAmenities(station.fields.amenities)">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div id="notes-wrapper" v-if="station.fields.notes">
        <p class="font-semibold text-sm mt-1 mb-0">Notes:</p>
        <div class="container prose text-sm mt-0 px-2">
          <ul>
            <li v-for="item in splitNotes(station.fields.notes)">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div clas="items-stretch">
        <button
        class="mt-4 w-full bg-orange-200 hover:bg-orange-500 text-slate-700 py-2 px-4 border border-orange-500 rounded"
        @click="setSelected(station)"
      >
        Show on map
      </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ConditionTag from '../components/ConditionTag.vue'
  import { selectedRecord } from '../clientStore.js';
  import { center } from '../clientStore.js';
  import { useStore } from '@nanostores/vue';
  const props = defineProps(['station'])

  const $selectedRecord = useStore(selectedRecord);
  const $center = useStore(center);
  
  function setSelected(station) {
    selectedRecord.set(station)
    center.set([parseFloat(station.fields.lat), parseFloat(station.fields.lng)])
  }

  function splitAmenities(amenities) {
    return amenities.split(',')
  }

  function splitNotes(notes) {
    return notes.split('\n')
  }
</script>

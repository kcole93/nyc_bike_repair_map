<template>
  <div class="my-2 border-b-2 border-slate-200">
    <div class="m-4">
      <div class="">
        <div class="align-center flex flex-wrap">
          <span class="mr-2 mb-0 font-bold">{{ station.name }}</span>
          <ConditionTag :condition="station.condition" class="align-right" />
        </div>
        <div id="amenities-wrapper" v-if="station.amenities">
          <p class="text-semibold mt-1 mb-0">Amenities:</p>
          <div class="container prose mt-0 px-2">
            <ul>
              <li v-for="item in splitAmenities(station.amenities)">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div id="notes-wrapper" v-if="station.notes">
          <p class="font-semibold mt-1 mb-0">Notes:</p>
          <div class="container prose mt-0 px-2 bg-gray-50 rounded-6">
            {{ station.notes }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ConditionTag from '../components/ConditionTag.vue'
  defineProps(['station'])

  function splitAmenities (amenities) {
    return amenities.split(",")
  }
</script>

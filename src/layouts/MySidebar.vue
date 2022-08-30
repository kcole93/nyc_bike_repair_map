<template>
    <aside class="top-0 bottom-0 h-screen overflow-y-auto border-solid border-r-4 border-orange-300 px-2 sm:w-1/3 md:w-1/3">
      <div class="mx-2 grid grid-cols-1">
        <StationCard
          v-for="record in remote_data.records"
          :key="record.id"
          :station="record"
        />
      </div>
    </aside>
  </template>
  
  <script setup>
    import StationCard from '../components/StationCard.vue'
    import { ref } from 'vue';

    const props = defineProps(['remote_data']);
  </script>
  
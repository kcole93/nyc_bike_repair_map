<template>
    <aside class="top-0 bottom-0 h-full sm:h-screen overflow-y-auto border-solid sm:border-r-4 border-orange-300 px-2">
      <div class="mx-2">
        <StationCard
          v-for="record in remote_data.records"
          :key="record.id"
          :record="record"
        />
      </div>
    </aside>
  </template>
  
  <script setup>
    import StationCard from '../components/StationCard.vue'
    import { ref } from 'vue';

    const props = defineProps(['remote_data']);
  </script>
  
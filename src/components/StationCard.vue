<template>
  <div class="my-2 border-b-2 border-slate-200 dark:border-slate-50">
    <MyStationDetails :record="record" />
      <div class="items-stretch my-5">
        <button
        class="w-full rounded-md border border-transparent bg-orange-100 dark:bg-orange-300 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        @click="setSelectedRecord(record)"
      >
        Show on map
      </button>
    </div>
  </div>
</template>

<script setup>
  import MyStationDetails from '../components/MyStationDetails.vue';
  import { setSelectedRecord } from '../components/composables/MapComposables';
  const props = defineProps(['record'])
</script>

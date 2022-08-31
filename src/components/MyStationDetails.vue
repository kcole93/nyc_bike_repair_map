<template>
    <div class="m-4">
      <div class="align-center flex flex-wrap">
        <span class="mr-2 mb-0 font-bold">{{ record.fields.name }}</span>
        <ConditionTag :condition="record.fields.condition" class="align-right" />
      </div>
      <div id="amenities-wrapper" v-if="record.fields.amenities">
        <p class="font-semibold text-sm mt-2 mb-0">Amenities:</p>
        <div class="container text-sm mt-0 px-2">
          <ul class="list-disc list-inside">
            <li v-for="item in splitAmenities(record.fields.amenities)">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div id="notes-wrapper" v-if="record.fields.notes">
        <p class="font-semibold text-sm mt-1 mb-0">Notes:</p>
        <div class="container text-sm mt-0 px-2">
          <ul class="list-disc list-inside">
            <li v-for="item in splitNotes(record.fields.notes)">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="showSubmitLink" class="items-stretch my-5">
        <p class="text-gray-400">Something not right? <a :href="updateFormUrl" target="_blank">Submit updated information</a></p>
    </div>
      </div>
</template>

<script setup>
    import { splitAmenities, splitNotes } from '../components/composables/RecordComposables';
    import ConditionTag from '../components/ConditionTag.vue';
    const props = defineProps(['record', 'showSubmitLink'])

    const updateFormUrl = "https://airtable.com/shrFR0CPoJfCOSRNJ?prefill_StationRecord=" + props.record.id

</script>
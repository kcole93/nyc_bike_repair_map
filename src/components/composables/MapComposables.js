import { ref } from 'vue';

export const selectedRecord = ref(null);


export function setSelectedRecord(record) {
  selectedRecord.value = record
}
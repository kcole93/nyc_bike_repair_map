<template>
    <div
        class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full" :class="condition_styling(condition)">
        {{ condition }}
</div>
</template>

<script setup>
    defineProps(['condition'])

    function condition_styling(condition) {
        
        if (condition == 'Good') {
            return 'bg-green-200 text-green-700'
        }
        if (condition == 'Mostly Usable') {
            return 'bg-orange-200 text-orange-700'
        }
        if (condition == 'Unusable') {
            return 'bg-red-200 text-red-700'
        }

        return 'bg-slate-200 text-slate-700'
    }
</script>
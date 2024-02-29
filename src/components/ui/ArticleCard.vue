<template>
  <div class="p-4 rounded-lg flex flex-col items-center gap-4 border-2 border-[#A275CB] h-full">
    <h2 class="self-start font-semibold text-2xl">{{ content.company }}</h2>
    <p>{{ content.description }}</p>
    <img :src="content.logo" alt="" class="w-32 text-center">
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: false
  }
})
</script>

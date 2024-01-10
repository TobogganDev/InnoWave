<template>
  <div class="flex flex-col gap-12 mx-28 my-12">
    <div class="flex gap-8">
      <div v-for="(brand, i) in brands" :key="i" class="flex flex-col items-center gap-4">
        <img :src="'/images/brands/' + brand.img" :alt="brand.name + '-logo'" class="w-20">
        <h4 class="capitalize font-bold text-3xl" :class="'text-[' + brand.color + ']'">{{ brand.name }}</h4>
      </div>
    </div>
    <div class="border-brand w-full h-1"></div>
  </div>
</template>

<script setup>
const brands = [
  {
    name: 'Oorion',
    img: 'oorion.svg',
    color: '#171F41'
  }
]
</script>

<style lang="scss" scoped>
.border-brand {
  background: rgb(162,117,203);
  background: linear-gradient(90deg, rgba(162,117,203,1) 0%, rgba(166,223,209,1) 25%, rgba(255,254,136,1) 50%, rgba(164,217,205,1) 75%, rgba(162,117,203,1) 100%);
}
</style>
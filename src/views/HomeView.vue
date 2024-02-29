<script setup>
import BrandSlider from '../components/BrandSlider.vue';
import HeroBannerComp from '../components/HeroBannerComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
import PrezComp from '../components/PrezComp.vue';
import TeamSection from '../components/TeamSection.vue';
</script>

<template>
  <main class="relative">
    <HeaderComp class="absolute"/>
    <HeroBannerComp />
    <PrezComp />
    <BrandSlider/>
    <TeamSection />
  </main>
</template>

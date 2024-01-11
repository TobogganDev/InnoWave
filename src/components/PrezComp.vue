<script setup>
import TileComp from './ui/TileComp.vue';
</script>

<template>
    <div class="my-28 lg:h-screen w-screen flex flex-col lg:flex-row items-center lg:justify-around">
        <img src="/images/logo.png" alt="logo_innowave" class="w-1/5">
        <div class="flex gap-5 flex-col items-end px-8 lg:w-3/5">
            <TileComp />
            <TileComp class="lg:mr-20"/>
            <TileComp />
        </div>
    </div>
</template>


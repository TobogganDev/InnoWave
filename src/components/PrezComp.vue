<script setup>
import TileComp from './TileComp.vue';
</script>

<template>
    <div class="h-screen w-screen flex flex-row items-center justify-around">
        <img src="../../public/images/logo.png" alt="logo_innowave" class="w-1/5">
        <div class="flex gap-5 flex-col items-end w-3/5">
            <TileComp />
            <TileComp class="mr-20"/>
            <TileComp />
        </div>
    </div>
</template>


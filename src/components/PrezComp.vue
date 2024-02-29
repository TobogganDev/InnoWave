<template>
    <div class="my-28 lg:h-screen w-screen flex flex-col lg:flex-row items-center lg:justify-around">
        <img src="/images/logo.png" alt="logo_innowave" class="w-1/5">
        <div class="flex gap-5 flex-col items-end px-8 lg:w-3/5">
            <TileComp :content="cardContent[0]"/>
            <TileComp :content="cardContent[1]" class="lg:mr-20"/>
            <TileComp :content="cardContent[2]"/>
        </div>
    </div>
</template>

<script setup>
import TileComp from './ui/TileComp.vue';
const cardContent = [
    {
        title: 'Que fait-on ?',
        text: "InnoWave est le média de référence sur LinkedIn dédié à la mise en lumière des start-ups et des entreprises qui proposent des innovations révolutionnaires dans le monde des affaires. Notre mission est de connecter les esprits créatifs et les innovateurs avec un public mondial avide de découvrir les technologies et les idées qui transforment l'avenir."
    },
    {
        title: 'Pourquoi ?',
        text: "InnoWave met en lumière les startups innovantes françaises pour inspirer et encourager l'entrepreneuriat. Nous croyons en la puissance des idées novatrices pour transformer notre société et stimuler l'économie."
    },
    {
        title: 'Notre engagement',
        text: "Notre objectif est de créer un écosystème dynamique où les startups françaises peuvent être découvertes, soutenues et connectées à des ressources cruciales. Nous aspirons à catalyser l'innovation en favorisant la visibilité et les opportunités pour ces entreprises en pleine croissance."
    }
]
</script>
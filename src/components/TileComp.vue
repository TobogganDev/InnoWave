<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronRight);
config.styleDefault = "solid";
</script>

<template>
    <div class="w-4/5 gap-8 flex flex-row items-center justify-between px-[25px] py-[15px] rounded-xl border-[3px] border-solid border-[black]">
        <div>
            <h3 class="font-bold text-2xl">Que fait-on</h3>
            <p class="font-light text-sm">InnoWave est le média de référence sur LinkedIn dédié à la mise en lumière des start-ups et des entreprises qui proposent des innovations révolutionnaires dans le monde des affaires. Notre mission est de connecter les esprits créatifs et les innovateurs avec un public mondial avide de découvrir les technologies et les idées qui transforment l'avenir.</p>
        </div>
        <div>
            <font-awesome-icon icon="chevron-right" class="cursor-pointer"/>
        </div>
    </div>
</template>

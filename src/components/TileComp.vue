<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronRight);
config.styleDefault = "solid";
</script>

<template>
    <div class="relative tile w-4/5 gap-8 flex flex-row items-center justify-between px-[25px] py-[15px] rounded-xl overflow-hidden">
        <div>
            <h3 class="z-[2] font-bold text-2xl">Que fait-on</h3>
            <p class="z-[2] font-light text-sm">InnoWave est le média de référence sur LinkedIn dédié à la mise en lumière des start-ups et des entreprises qui proposent des innovations révolutionnaires dans le monde des affaires. Notre mission est de connecter les esprits créatifs et les innovateurs avec un public mondial avide de découvrir les technologies et les idées qui transforment l'avenir.</p>
        </div>
        <div>
            <font-awesome-icon icon="chevron-right" class="z-[2] cursor-pointer"/>
        </div>
    </div>
</template>

<style>
.tile {
    /* border: 10px solid transparent;
    border-image: linear-gradient(to right, #FFF, #A275CB) 1 stretch; */

    border: 10px solid transparent;
    border-radius: 15px; /* Adjust as needed */
    padding: 20px;
    border-image: linear-gradient(45deg, #fff, #A275CB) 1;
    transition: border-image-source 0.5s linear;
}

.tile:hover {
  /* Change the angle of the gradient on hover */
  border-image: linear-gradient(405deg, #fff, #A275CB) 1;
}

</style>

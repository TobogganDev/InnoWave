<template>
    <div class="relative tile lg:w-4/5 gap-8 flex flex-row items-center justify-between px-6 py-4 rounded-xl overflow-hidden">
        <div>
            <h3 class="z-[2] font-bold text-2xl">{{ content.title }}</h3>
            <p class="z-[2] font-light text-sm">{{ content.text }}</p>
        </div>
        <div>
            <font-awesome-icon icon="chevron-right" class="z-[2] cursor-pointer"/>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object
})

console.log(props.content)
</script>

<style>
.tile {
    border: 10px solid transparent;
    border-radius: 15px; /* Adjust as needed */
    padding: 20px;
    transition: border-image-source 0.5s linear;
    border: 2px solid #A275CB;
}

.tile:hover {
    cursor: pointer;
}
</style>

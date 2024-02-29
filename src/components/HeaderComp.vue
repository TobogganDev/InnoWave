<template>
    <div class="w-full z-10">
        <div class="max-w-md mx-auto flex flex-row items-center">
            <div class=" w-1/3 flex flex-row items-center justify-end gap-4 text-custom-black font-normal">
                <router-link to="/" class="w-fit">Home</router-link>
                <router-link to="/blog" class="w-fit">Blog</router-link>
            </div>
            <div class=" w-1/3 flex justify-center items-center">
                <img src="/images/logo.png" alt="logo_innowave" class="w-1/2">
            </div>
            <div class="w-1/3 flex flex-row items-center justify-start gap-4 text-custom-black font-normal">
                <router-link to="/a_propos" class="w-fit">A Propos</router-link>
                <router-link to="/contact" class="w-fit">Contact</router-link>
            </div>
        </div>

        <!-- <div class="flex gap-10 items-center nav border-b border-custom-black">
            <div class="border-r border-custom-black w-20 flex justify-center">
                <img src="/images/logo.png" alt="logo" class="w-14">
            </div>
            <router-link to="/" class="text-custom-black font-normal md: text-2xl">Home</router-link>
        </div> -->
    </div>
</template>


<template>
  <div class="border-t-4 border-custom-purple bg-custom-black px-8 lg:px-28 py-10 text-white flex flex-col gap-8 md:flex-row justify-between w-full">
    <div class="flex flex-col gap-12">
      <div class="">
        <h3 class="uppercase text-gray-500 font-bold mb-4">Contact</h3>
        <p class="mb-2 text-lg">+33 01 23 45 67 89</p>
        <p class="text-lg">Innowave@edu.devinci.fr</p>
      </div>
      <div class="">
        <p class="text-xl">Inscrivez vous à notre newletter</p>
        <div class="flex flex-col md:flex-row gap-4 md:items-center mt-4">
          <input type="text" name="newsletter" id="newsletter" class="bg-[#595A5F] rounded-lg text-lg outline-custom-light-purple py-2 px-4">
          <button class="bg-custom-light-purple py-2 px-4 text-lg rounded-lg uppercase font-semibold">S'inscrire</button>
        </div>
      </div>
      <div class="flex gap-2">
        <p class="cursor-pointer">Politique de confidentialité</p>
        <p>|</p>
        <p class="cursor-pointer">Conditions d'utilisation</p>
      </div>
    </div>
    <div class="flex flex-col gap-8 md:items-center">
      <img src="/images/logo.png" alt="logo" class="w-40 hidden md:block">
      <a href="https://www.linkedin.com/company/innowavefr/" target="_blank">
        <i class="fa-brands fa-linkedin fa-2xl" style="color: #676767;"></i>
      </a>
      <p>© 2023 InnoWave. Tous droits réservés</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
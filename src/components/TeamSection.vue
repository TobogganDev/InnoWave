<template>
  <div class="grid grid-cols-4 gap-8 my-12 mx-28">
    <div v-for="item in teamMembers" :key="item.firstName" class="text-center flex flex-col items-center gap-4">
      <img :src="'/images/team/' + item.img" :alt="item.firstName" class="rounded-full w-36">
      <h4 class="capitalize font-bold text-3xl">{{ item.firstName }} {{ item.lastName }}</h4>
      <h5 class="capitalize font-semibold text-2xl">{{ item.role }}</h5>
      <div class="mt-auto">
        <a :href="item.link" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    firstName: 'brévin',
    lastName: 'renaud',
    img: 'brevin.jpeg',
    role: 'chargé de contenu',
    social: 'linkedin',
    link: 'https://www.linkedin.com/in/brevin-renaud/'
  },
  {
    firstName: 'quentin',
    lastName: 'pacheu',
    img: 'quentin.jpg',
    role: 'rédacteur',
    social: 'linkedin',
    link: 'https://www.linkedin.com/in/quentin-pacheu/'
  },
  {
    firstName: 'marc',
    lastName: 'moureau',
    img: 'marc.jpg',
    role: 'développeur',
    social: 'linkedin',
    link: 'https://www.linkedin.com/in/marc-moureau/'
  },
  {
    firstName: 'thomas',
    lastName: 'filhol',
    img: 'thomas-f.jpeg',
    role: 'graphiste',
    social: 'linkedin',
    link: 'https://www.linkedin.com/in/filholthomas/'
  },
  {
    firstName: 'ambre',
    lastName: 'kouitini',
    img: 'ambre.jpeg',
    role: 'community manager',
    social: 'linkedin',
    link: 'https://www.linkedin.com/in/ambre-kouitini/'
  },
  {
    firstName: 'marvin',
    lastName: 'clerc',
    img: 'marvin.jpg',
    role: 'graphiste',
    social: 'linkedin',
    link: 'https://www.linkedin.com/in/marvinclerc21/'
  },
  {
    firstName: 'arthur',
    lastName: 'pouteau',
    img: 'arthur.jpg',
    role: 'chargé de contact',
    social: 'linkedin',
    link: 'https://www.linkedin.com/in/arthur-pouteau-a9b90b207/'
  },
  {
    firstName: 'thomas',
    lastName: 'doret-gaïsset',
    img: 'thomas-d.jpeg',
    role: 'développeur',
    social: 'linkedin',
    link: 'https://www.linkedin.com/in/thomas-doret-gaisset/'
  }
]
</script>

<style lang="scss" scoped>

</style>
<template>
  <HeaderComp class="absolute"/>
  <div class="py-36 px-56 flex gap-4 flex-col" v-html="article.content"></div>
</template>

<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import articles from '../articles.json';

const route = useRoute();
const articleId = ref(route.params.id);

const article = computed(() => {
  var foundArticle = articles.articles.find(article => article.id == articleId.value);
  return foundArticle;
})

</script>

<style lang="scss" scoped>
.article {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  font-size: 1.5rem;
}
</style>
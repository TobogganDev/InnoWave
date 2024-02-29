<template>
  <div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import articles from '../articles.json';

const route = useRoute();
const articleId = ref(route.params.id);
const article = ref(null);

let test = articles.articles
console.log(test);

onMounted(() => {
  const foundArticle = test.find(article => article.id === articleId.value);
  console.log(foundArticle);
  article.value = foundArticle;
});

console.log(article.value);
</script>

<style lang="scss" scoped>

</style>
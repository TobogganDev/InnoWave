<template>
  <div>
    {{  }}
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import articles from '../articles.json';

const route = useRoute();
const articleId = ref(route.params.id);

const article = computed(() => {
  var foundArticle = articles.articles.find(article => article.id == articleId.value);
  return foundArticle;
})

console.log(article);
</script>

<style lang="scss" scoped>

</style>, computed
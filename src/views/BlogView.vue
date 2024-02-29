<template>
    <div class="">
        <HeaderComp class=""/>
        <div class="mx-32 my-28 grid grid-cols-3 gap-8">
            <router-link :to="'/article/' + article.id" v-for="article in articles.articles" :key="article.id">
                <ArticleCard  :content="article" />
            </router-link>
        </div>
    </div>
</template>

<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import ArticleCard from '../components/ui/ArticleCard.vue';
import articles from '../articles.json';

</script>
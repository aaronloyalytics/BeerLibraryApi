<script setup lang="ts">
import { } from '#app'
const { isDarkMode, toggleDarkMode } = useDarkMode();
const { data: beers, error } = useFetch('https://api.punkapi.com/v2/beers');
const route = useRoute()
const name = route.params.name
const beer = Array.isArray(beers) ? beers.find(r => r.name === name) : 0
console.log(beer); 
useHead({
    title: name,
    meta: [
        {
            name: 'viewport'
        }
    ]
})
</script>

<template>
    <p style="color:aliceblue">{{beer}}</p>
    <div class="container" :style="isDarkMode ? { backgroundColor: 'rgb(22, 22, 30)', color: 'white' } : null">
        <div class="square" :style="isDarkMode ? { backgroundColor: 'rgb(27, 29, 33)', color: 'white' } : null">
            <img src="" class="mask">
            <div class="h1">{{ name }}</div>
            <p class="beerNameDesc">{{ beers.description }}</p>

            <div><a href="" class="button">Go Back</a></div>
        </div>
    </div>

</template>


<style>
@import '~/assets/style/name.css';
</style>
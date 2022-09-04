<script setup lang="ts">
const { isDarkMode, toggleDarkMode } = useDarkMode();
const { data: beers, error } = useFetch('https://api.punkapi.com/v2/beers');

const {data: cart} = useFetch("/api/cart")

useHead({
    title: 'Beer Api',
    meta: [
        {
            name: 'viewport'
        }
    ]
})

</script>

<template>
    <!-- {{cart}} -->
    <div class="header" :style="isDarkMode ? { backgroundColor: 'rgb(22, 22, 30)', color: 'white' } : null">
        <h1 class="header__main">Beer</h1>
        <h3 class="header__submain">Search for your favourite beer</h3>
    </div>
    <div class="container" :style="isDarkMode ? { backgroundColor: 'rgb(22, 22, 30)' } : null">
        <div class="card" v-for="(beer, index) in beers"
            :style="isDarkMode ? { backgroundColor: 'rgb(15, 15, 19)' } : null">
            <div class="card-header">
                <img src={{beer.image_url}} alt="rover" />
            </div>
            <div class="card-body" :style="isDarkMode ? { backgroundColor: 'rgb(27, 29, 33)', color: 'white' } : null">
                <span class="tag tag-teal">Ph: {{ beer.ph }}</span>
                <h4>
                    <a :href="`/beers/${beer.name}`"
                        :style="isDarkMode ? { backgroundColor: 'rgb(27, 29, 33)', color: 'white' } : null">
                        {{ beer.name }}
                    </a>
                </h4>
                <p>
                    {{ beer.description }}
                </p>
                <div class="beer">
                    <div class="beer-info">
                        <h5>{{ beer.first_brewed }}</h5>
                        <small>{{ beer.tagline }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import '~/assets/style/beer.css';
</style>
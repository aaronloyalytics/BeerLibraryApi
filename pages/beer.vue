<script setup lang="ts">
import axios from 'axios';
const { isDarkMode, toggleDarkMode } = useDarkMode();
let pgNo = ref(1);
const search = ref("hello");
const input = ref("");
let url = `https://api.punkapi.com/v2/beers?page=${pgNo.value}&per_page=12`;


const { data: beers, refresh, error} = await useFetch(
    () => url 
);



const searchBeer = async() => {
    axios.get(`https://api.punkapi.com/v2/beers?beer_name=${input.value}`);
    await $fetch(`https://api.punkapi.com/v2/beers?beer_name=${input.value}`);
    refresh();

    const formattedSearch = input.value;
    url.concat(`&beer_name=${formattedSearch}`);
    history.pushState(
        {},
        null,
        url + '&beer_name=' + input
    )
    refresh();
    const formattedSearch = input.value.trim().split(" ").join("+");
    if (input.value !== "") {
        const { data: beers, error } = useAsyncData("beers", async () => {
            const response = await $fetch(
                `https://api.punkapi.com/v2/beers?beer_name=${formattedSearch}`
            );
        }
        );
    }
}




const { data: cart } = useAsyncData("cart", () => {
    return $fetch("/api/cart")
});

const addCart = async (data) => {
    if (!data) return; console.log(data);
    alert("Added to cart");
    await $fetch("/api/cart", { method: "post", body: { item: beers.value[data] } });
    refresh()
}
const addFav = async (data) => {
    if (!data) return; console.log(data);
    alert("Added to WishList");
    await $fetch("/api/fav", { method: "post", body: { item: beers.value[data] } });
    refresh()
}

const nextPage = () => {
    pgNo.value++; console.log(pgNo);
    refresh();
}
const prevPage = () => {
    if (pgNo.value == 1) {
        refresh();
    }
    else {
        pgNo.value--; console.log(pgNo);
        refresh();
    }

}
useHead({
    title: 'Beer Api',
    meta: [
        {
            name: 'viewport',
        },
    ]
})
</script>

<template>
    {{input}}
    <div class="header" :style="isDarkMode ? { backgroundColor: 'rgb(22, 22, 30)', color: 'white' } : null">
        <h1 class="header__main">Beer</h1>
        <h3 class="header__submain">Search for your favourite beer</h3>
        <div class="icons">
            <a href="./fav"><span class="material-symbols-outlined"
                    :style="isDarkMode ? { color: 'rgb(255,192,203)' } : null">favorite</span></a>
            <a href="./cart"><span class="material-symbols-outlined"
                    :style="isDarkMode ? { color: 'rgb(212,175,55)' } : null">shopping_cart</span></a>
        </div>
    </div>
    <div class="pagination">
        <a href="#" class="previous" @click="prevPage"
            :style="isDarkMode ? { backgroundColor: 'rgb(27, 29, 33)', color: 'white' } : null">&laquo; Previous</a>
        <a href="#" class="next active" @click="nextPage">Next &raquo;</a>
    </div>
    <input type="text" placeholder="Search Beers e.g. Pale Ale" v-model="input" />
    <button @click="searchBeer">search</button>
    <div class="container" :style="isDarkMode ? { backgroundColor: 'rgb(22, 22, 30)' } : null">

        <div class="card" v-for="(beer, index) in beers"
            :style="isDarkMode ? { backgroundColor: 'rgb(15, 15, 19)' } : null">
            <div class="star" @click="addFav(index)">🧡</div>
            <div class="card-header">
                <img :src=beer.image_url alt="rover" />
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
                <p>
                    Tagline: <br>
                    {{ beer.tagline }}
                </p>
                <div class="beer">
                    <div class="beer-info">
                        <h5>{{ beer.first_brewed }}</h5>
                        <small>{{ beer.tagline }}</small> <br />

                        <small>

                            <span class="material-symbols-outlined addBeer"
                                :style="isDarkMode ? { color: 'rgb(255,255,255)' } : null" @click="addCart(index)">

                                add_shopping_cart
                            </span>
                        </small>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="pagination">
        <a href="#" class="previous" @click="prevPage"
            :style="isDarkMode ? { backgroundColor: 'rgb(27, 29, 33)', color: 'white' } : null">&laquo; Previous</a>
        <a href="#" class="next active" @click="nextPage">Next &raquo;</a>
    </div>
</template>

<style>
@import '~/assets/style/beer.css';
</style>
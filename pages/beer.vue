<script setup lang="ts">
const { isDarkMode, toggleDarkMode } = useDarkMode();
const beerName = ref("");
const brewedBefore = ref("");
const brewedAfter = ref("");
let pgNo = ref(1);

const url = computed(() => {
    return `https://api.punkapi.com/v2/beers?page=${pgNo.value}&per_page=12&beer_name=${beerName.value}`
})

const { data: beers, refresh, error } = await useFetch(
    () => beerName.value == "" ? `https://api.punkapi.com/v2/beers?page=${pgNo.value}&per_page=12` : `https://api.punkapi.com/v2/beers?page=${pgNo.value}&per_page=12&beer_name=${beerName.value}`
);

//  condition1 ? value1
// : condition2 ? value2
//         : condition3 ? value3
//         : value4;

const searchBeer = async () => {
    const { data: beers, refresh, error } = await useFetch(
        () => beerName.value == "" ? `https://api.punkapi.com/v2/beers?page=${pgNo.value}&per_page=12` : `https://api.punkapi.com/v2/beers?page=${pgNo.value}&per_page=12&beer_name=${beerName.value}`
    );

}

const brewDate = async () => {

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
    <!-- {{beerName}} -->
    <div class="header" :style="isDarkMode ? { backgroundColor: 'rgb(22, 22, 30)', color: 'white' } : null">
        <div class="header__text">
            <h1 class="header__main">Beer API</h1>
            <h3 class="header__submain">Search for your favourite beer</h3>

        </div>
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
    </div> <br>


    <div class="search">
        <!-- <form @submit.prevent="searchBeer">
            <input v-model="beerName" type="text" placeholder="Search Beers e.g. Pale Ale" class="searchButton"/>
        </form> -->
        <div id="cover">
            <form method="get" @submit.prevent="searchBeer" action="">
                <div class="tb">
                    <div class="td">
                        <input v-model="beerName" type="text" placeholder="Search" required>
                    </div>
                </div>
            </form>
            <form method="get" action="">
                <div class="tb">
                    <div class="td">
                        <input v-model="brewedBefore" type="text" placeholder="Brewed Before" required>
                    </div>
                </div>
            </form>
            <form method="get" action="">
                <div class="tb">
                    <div class="td">
                        <input v-model="brewedAfter" type="text" placeholder="Brewed After" required>
                    </div>
                </div>
            </form>
        </div>
    </div>

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

<script lang="ts">
    // const formattedSearch = beerName.value.trim().split(" ").join("+");
    // if (beerName.value !== "") {
    //     const { data: beers, error } = useAsyncData("beers", async () => {
    //         const response = await useFetch(
    //             `https://api.punkapi.com/v2/beers?beer_name=${formattedSearch}`
    //         );
    //     }
    //     );
    // }
    // if (beerName.value !== "") { refresh(); } else { url.value }
</script>
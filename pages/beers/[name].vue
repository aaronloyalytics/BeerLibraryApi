<script setup lang="ts">
const { isDarkMode, toggleDarkMode } = useDarkMode();

const route = useRoute()
const name = route.params.name;

const { data: beer, refresh, error } = await useFetch(
    () => `https://api.punkapi.com/v2/beers?beer_name=${name}`
);

const { data: cart } = useAsyncData("cart", () => {
    return $fetch("~/api/cart")
});

const addCart = async (data) => {
    if (!data) return; 
    console.log(data);
    alert("Added to cart");
    await $fetch("/api/cart", { method: "post", body: { item: beer.value[data] } });
    refresh()
}
const addFav = async (data) => { 
    if (!data) return; 
    console.log(data);
    alert("Added to WishList");
    await $fetch("/api/fav", { method: "post", body: { item: beer.value[data] } });
    refresh()
}


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

    <div id="container" :style="isDarkMode ? { backgroundColor: 'rgb(22, 22, 30)', color: 'white' } : null">
        <div class="loop" v-for="(item, index) in beer"> 
            <div class="product-details">
                
                <h1 :style="isDarkMode ? { backgroundColor: 'rgb(22, 22, 30)', color: 'white' } : null">{{item.name}}
                </h1> <br>
                <span class="hint-star star">
                    <i aria-hidden="true">{{item.ph}}</i>
                </span>

                <p class="information">{{item.description}}</p>
                

            </div>

            <div class="product-image">

                <img :src=item.image_url alt="">


            </div>
            <div class="wish" @click="addFav(index)">🧡</div>
            <small>
                <span class="material-symbols-outlined addBeer"
                    :style="isDarkMode ? { color: 'rgb(255,255,255)' } : null" @click="addCart(item.index)">

                    add_shopping_cart
                </span>
            </small>

        </div>
    </div>



</template>


<style>
@import '~/assets/style/name.css';
</style>
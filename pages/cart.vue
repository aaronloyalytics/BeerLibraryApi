<script setup>
import { db } from '~/server/db';
const { data: cart, refresh } = useAsyncData("cart", () => {
    return $fetch("/api/cart");
    refresh();
});
const { isDarkMode, toggleDarkMode } = useDarkMode();

const deleteItem = async (id) => {
    alert("Removed to cart");
    await $fetch(`/api/cart/${id}`, { method: "delete" });
    refresh();
}
const purchase = async (id) => {
    db.cart.splice(0);
    alert("Delivering to Address XXX");
    $router.push('/beer');
    
}
useHead({
    title: 'Cart',
    meta: [
        {
            name: 'viewport',
        },
    ]
})
</script>

<template>
    <!-- {{cart}} -->
    <div class="shopping-cart" :style="isDarkMode ? { backgroundColor: 'rgb(255,255,255)' } : null">
        <!-- Title -->
        <div class="title">
            Cart
        </div>

        <!-- Product #1 -->
        <div class="item" v-for="(cartItem, index) in cart">
            <div class="buttons">
                <span class="delete-btn"></span>
                <span class="like-btn"></span>
            </div>

            <div class="image">
                <img :src=cartItem.item.image_url alt="" style="width:25px; padding-top:1em; cursor:pointer" />
            </div>

            <div class="description">
                <span>{{cartItem.item.name}}</span>
                <span>{{cartItem.item.first_brewed}}</span>
                <span>{{cartItem.item.tagline}}</span>
            </div>

            <div class="quantity">
                <button class="plus-btn" type="button" name="button">
                    +
                </button>
                <input type="text" name="name" value="1">
                <button class="minus-btn" type="button" name="button">
                    -
                </button>
            </div>

            <div class="total-price">${{cartItem.item.ebc}}</div>
            <button type="button" class="remove" @click="() =>deleteItem(cart.id)">x</button>
        </div>
        <hr>
        <a href="/beer" @click="purchase">
            <button class="button">Purchase</button>
        </a>
        <!-- END OF PRODUCT -->

    </div>

</template>

<style>
@import '~/assets/style/cart.css';
</style>


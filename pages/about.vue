<script setup>
const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>

    <Head>
        <Title>
            About
        </Title>
    </Head>

    <h1 class="display-1">About</h1>
    <section>
        <div v-if="!Object.keys(gif).length">Loading...</div>
        <div v-else>
            <img :src="gif.images.original.url" alt="" class="gif"
                :style="isDarkMode ? { backgroundColor: 'rgb(26, 27, 38)' } : null">
        </div>
    </section>
    <section :style="isDarkMode ? { backgroundColor: 'rgb(26, 27, 38)' } : null">
        <div>
            <p class="lead" :style="isDarkMode ? { backgroundColor: 'rgb(26, 27, 38)', color: 'white' } : null">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci magna, suscipit vitae
                pellentesque at,
                mollis in mauris. Nulla congue felis at nisi posuere eleifend. Etiam eleifend, lacus faucibus auctor
                dignissim, sem nulla accumsan mauris, auctor ultricies ante leo in sapien. Integer ultrices lorem eget
                magna
                pharetra ultricies. Mauris laoreet augue lorem, in congue nunc sagittis ac. Sed at odio vehicula,
                elementum
                ante ut, fringilla quam. Donec viverra vestibulum suscipit. Phasellus sed facilisis felis. Aliquam ac
                neque


                Donec scelerisque venenatis purus non convallis. Sed nec tincidunt nibh, sed volutpat metus. Donec
                ultricies, diam tristique laoreet ultricies, elit turpis ullamcorper neque, eu ullamcorper eros erat at
                risus. Ut in lacinia justo. Mauris dapibus ultricies arcu a ultrices. In eget elit velit. Quisque
                volutpat
                erat sed fermentum mattis. Quisque blandit, tellus vel fermentum condimentum, est orci maximus velit,
                nec
                ultrices nulla ex ac mi. Cras suscipit pretium metus sit amet aliquet. Integer a nisl sodales, imperdiet
                ex
                id, molestie elit. Aenean porttitor justo a mi egestas mattis. Aliquam sit amet felis ut metus elementum
                feugiat sed in orci. Sed nec dictum libero. Sed sed urna risus. Fusce porttitor enim vehicula, egestas
                ipsum
                at, luctus ipsum. Donec arcu augue, malesuada vitae gravida vitae, porta sed mi.</p>

        </div>

    </section>

</template>
<script>
import { GiphyFetch } from '@giphy/js-fetch-api';
export default {
    name: 'aaron',

    data() {
        return {
            gif: {},
        }
    },

    async created() {
        await this.loadGif();
    },

    methods: {
        async loadGif() {
            const gf = new GiphyFetch('9MVlH4Tzh4vNpiYYVHyCz36hhLdVzYng');
            const { data: gif } = await gf.random({ tag: 'hi' })
            this.gif = gif;
            console.log(gif);
            for (i in trendingResponse.data) {
                const image = document.createElement('img');
                image.src = trendingResponse.data[i].images.original.url;

                gifsContainer.append(image);
            }
        }

    },
};

</script>

<style>
@import '~/assets/style/about.css';
</style>

    
<template>
  <header class="site-header" :style="isDarkMode ? { backgroundColor: 'rgb(22,22,30)' } : null">
    <div class="site-identity" :style="isDarkMode ? { color: 'white' } : null">
      <h1><a href="/" :style="isDarkMode ? { color: 'white' } : null">Aaron </a></h1>
    </div>
    <nav class="site-navigation">
      <ul class="nav">
        <li><a href="/" :style="isDarkMode ? { color: 'white' } : null">
            Home
          </a></li>
        <li><a href="/about" :style="isDarkMode ? { color: 'white' } : null">
            About
          </a></li>
        <li><a href="/beer" :style="isDarkMode ? { color: 'white', } : null">
            Beer API
          </a></li>
        <li><label class="switch">
            <input type="checkbox" v-model="isDarkMode" @click="toggleDarkMode">
            <span class="slider round"></span>
          </label>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>
<style>
@import '~/assets/style/V-header.css';
</style>
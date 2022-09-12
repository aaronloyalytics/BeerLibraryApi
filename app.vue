<template>
  <div :style="isDarkMode ? { backgroundColor: 'rgb(22, 22, 30)' } : null">    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const {isDarkMode} = useDarkMode();
</script>
<template>
    <div class="layout">
        <Header />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
</script>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
}
</style>
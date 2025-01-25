<script setup lang="ts">
import Slide from '../components/Slide.vue'
import GetStarted from '../components/GetStarted.vue'
import FeatureOverview from '../components/FeatureOverview.vue'
import AppIntroduction from '../components/AppIntroduction.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
  <div class="home">
    <GetStarted />
    <Slide />
    <AppIntroduction />
    <FeatureOverview />
    <Footer />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>

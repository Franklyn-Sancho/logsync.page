<script setup lang="ts">
import Slide from '../components/Slide.vue'
import QuestionSection from '../components/QuestionSection.vue'
import InfoSection from '../components/InfoSection.vue'
import GetStarted from '../components/GetStarted.vue'
import FeatureOverview from '../components/FeatureOverview.vue'

</script>

<template>
  <div class="home">

    <GetStarted />
    <Slide />

    <FeatureOverview />


    <QuestionSection />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>

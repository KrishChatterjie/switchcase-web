<template>
  <section class="cases">
    <div v-for="(sCase, index) in cases" :key="index">
      <Case @set-active="$emit('set-active', index)" :sCase="sCase" :idx="index" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Case from './Case.vue'

export default defineComponent({
  name: 'Cases',
  props: {
    cases: Array
  },
  components: {
    Case
  },
  emits: ['set-active']
})
</script>

<style scoped>
.cases {
  margin: 1rem;
  flex-flow: wrap;
  display: flex;
  align-items: center;
}
</style>

<template>
  <!-- 10 should become activeIdx or something -->
  <button @click="$emit('set-active', idx)" :class="[activeIdx == idx && 'active', '']">{{sCase}}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Case',
  props: {
    sCase: String,
    idx: Number,
    activeIdx: Number
  },
  emits: ['set-active']
})
</script>

<style scoped>
button {
  margin: 0.25rem 0.5rem 0.25rem 0;
  font-family: 'Manrope', sans-serif;
  padding: 0.25rem 0.5rem;
  border: 0.0625rem solid var(--pink-200);
  border-radius: 0.25rem;
  background-color: var(--dark-blue);
  color: var(--teal-200);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  white-space: pre;
}

button.active, button:hover {
  background-color: var(--pink-500);
  color: #fff;
}

button.active {
  font-weight: bold;
}
</style>

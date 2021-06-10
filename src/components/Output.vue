<template>
  <section>
    <div title="Click to copy!" @click="copyText(output)">
      {{ output }}
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Output',
  props: {
    output: String
  },
  methods: {
    async copyText (text: string) {
      try {
        await navigator.clipboard.writeText(text)
      } catch (e) {}
    }
  }
})
</script>

<style scoped>
div {
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  white-space: pre;
}
</style>

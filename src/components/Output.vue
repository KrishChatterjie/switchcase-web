<template>
  <section>
    <div>
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

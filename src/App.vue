<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --dark-blue: #2f4a67;
  --teal-200: #b2eee6;
  --teal-500: #8ad6cc;
  --pink-200: #f99192;
  --pink-500: #f97171;
}

html, body, #app {
  width: 100%;
  height: 100%;
  font-family: 'Manrope', sans-serif;
  background-color: var(--dark-blue);
  color: #fff;
}
</style>

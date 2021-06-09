<template>
  <section>
    <textarea
      class="user-text"
      placeholder="Enter your text!"
      wrap="hard"
      autofocus
      v-model="text"
      @keyup="$emit('user-input', text)"/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  data () {
    return {
      text: ''
    }
  },
  emits: ['user-input']
})
</script>

<style scoped>
textarea {
  resize: none;
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  padding: 0.5rem;
  height: clamp(10rem, 35%, 20rem);
  width: 100%;
  margin: 1px;
  border: 0.0625rem solid var(--teal-200);
  border-radius: 0.25rem;
  background-color: var(--dark-blue);
  color: var(--teal-200);
}

textarea:focus {
  outline: none;
  margin: 0;
  border: 0.125rem solid var(--pink-200);
  border-radius: 0.375rem;
}

textarea::placeholder,
textarea::-moz-placeholder,
textarea::-webkit-input-placeholder,
textarea:-ms-input-placeholder {
  color: #fff;
  opacity: 0.5;
}

@media screen and (min-width: 768px) {
  section {
    margin-right: 10rem;
  }

  textarea {
    padding: 1rem;
  }
}
</style>

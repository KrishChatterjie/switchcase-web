<template>
  <Header />
  <Cases @set-active="setActive" :cases="cases" :activeIdx="activeIdx"/>
  <Input @user-input="userInput"/>
  <Output :output="outputText"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Cases from './components/Cases.vue'
import Input from './components/Input.vue'
import Output from './components/Output.vue'
import { convertCase } from './utils/switches'

// TODO: add copy to clipboard feature on click
// TODO: add randomize selected output button
// TODO: add scrollbar to textarea and body

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Cases,
    Input,
    Output
  },
  data () {
    return {
      activeIdx: 0,
      cases: [
        'UPPERCASE',
        'lowercase',
        'Title Case',
        'camelCase',
        'PascalCase',
        'snake_case',
        'kebab-case',
        'dot.case',
        's p a c e   c a s e',
        'TOWER CASE',
        'esac esrever',
        'uGLy cAsE',
        'G0И3 ¢4S3',
        '👏Clap👏case👏'
      ],
      inputText: '',
      outputText: ''
    }
  },
  methods: {
    setActive (id: number) {
      this.activeIdx = id
      this.userInput(this.inputText)
    },
    userInput (text: string) {
      this.inputText = text
      if (this.inputText !== '') this.outputText = convertCase(text, this.activeIdx)
      else this.outputText = convertCase('Enter your text!', this.activeIdx)
    }
  },
  created () {
    this.userInput('Enter your text!')
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

section {
  margin: 2rem 1rem;
}
</style>

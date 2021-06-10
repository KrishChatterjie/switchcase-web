<template>
  <header>
    <a href="localhost:8080">
      <div class="logo">
        <img src="./../assets/logo.png" alt="SwitchCase Logo" />
      </div>
      <h1 class="switchcase">Switch<span>Case</span></h1>
    </a>

    <div class="faces">
      <a href="https://github.com/KrishChatterjie">
        <div class="face" id="krish">
          <!-- <img src="./../assets/kc.jpg" alt="Krish" /> -->
        </div>
      </a>
      <a href="https://github.com/iamyajat">
        <div class="face" id="yajat">
          <!-- <img src="./../assets/ym1.jpeg" alt="Yajat" /> -->
        </div>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style scoped>
header {
  width: 100%;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
}

a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo {
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 0.25rem;
}

.logo > img {
  width: 100%;
}

.switchcase {
  font-size: 1.5rem;
}

.switchcase > span {
  color: var(--pink-200);
}

.faces {
  display: flex;
  align-items: center;
}

.face {
  margin-left: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
}

#krish {
  background-image: url('./../assets/kc1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  transition: background-image 0.2s ease-out;
}

#krish:hover {
  background-image: url('./../assets/kc2.png');
}

#yajat {
  background: url('./../assets/yum1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  transition: all 0.2s ease-out;
}

#yajat:hover {
  background-image: url('./../assets/yum2.png');
}

@media screen and (min-width: 768px) {
  header {
    padding: 1rem;
  }

  .logo {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }

  .switchcase {
    font: 2rem;
  }

  .face {
    height: 3.5rem;
    width: 3.5rem;
  }
}
</style>

<script setup>
import { ref } from 'vue'

const visible = ref(true)

const ejemplo = `<p v-show="visible">¡Hola! Estás aprendiendo Vue.</p>`
</script>

<template>
  <section>
    <h2>v-show</h2>

    <p>
      v-show muestra u oculta un elemento mediante CSS.
      Aunque esté oculto, el elemento permanece en el DOM.
    </p>

    <button @click="visible = !visible">
      {{ visible ? 'Ocultar mensaje' : 'Mostrar mensaje' }}
    </button>

    <div class="resultado">
      <p v-show="visible">¡Hola! Estás aprendiendo Vue.</p>
      <p>Estado: {{ visible ? 'Visible' : 'Oculto' }}</p>
    </div>

    <h3>Código del ejemplo</h3>
    <pre><code>{{ ejemplo }}</code></pre>
  </section>
</template>
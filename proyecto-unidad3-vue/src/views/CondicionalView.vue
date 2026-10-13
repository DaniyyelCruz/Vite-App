<script setup>
import { ref } from 'vue'

const calificacion = ref(8)

const ejemplo = `<p v-if="calificacion >= 9">Excelente</p>
<p v-else-if="calificacion >= 6">Aprobado</p>
<p v-else>Reprobado</p>`
</script>

<template>
  <section>
    <h2>v-if / v-else-if / v-else</h2>

    <p>
      Estas directivas muestran diferentes elementos según una condición.
      En este ejemplo, el resultado depende de la calificación.
    </p>

    <label for="calificacion">Selecciona una calificación:</label>

    <select id="calificacion" v-model.number="calificacion">
      <option :value="5">5</option>
      <option :value="8">8</option>
      <option :value="10">10</option>
    </select>

    <div class="resultado">
      <p v-if="calificacion >= 9">Excelente</p>
      <p v-else-if="calificacion >= 6">Aprobado</p>
      <p v-else>Reprobado</p>
    </div>

    <h3>Código del ejemplo</h3>
    <pre><code>{{ ejemplo }}</code></pre>
  </section>
</template>
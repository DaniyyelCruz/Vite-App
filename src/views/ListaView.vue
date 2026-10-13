<script setup>
import { ref } from 'vue'

const nuevaFruta = ref('')
let siguienteId = 4

const frutas = ref([
  { id: 1, nombre: 'Manzana' },
  { id: 2, nombre: 'Mango' },
  { id: 3, nombre: 'Fresa' },
])

function agregarFruta() {
  const nombre = nuevaFruta.value.trim()

  if (nombre === '') return

  frutas.value.push({
    id: siguienteId++,
    nombre,
  })

  nuevaFruta.value = ''
}

const ejemplo = `<li v-for="fruta in frutas" :key="fruta.id">
  {{ fruta.nombre }}
</li>`
</script>

<template>
  <section>
    <h2>v-for</h2>

    <p>
      v-for recorre una lista y genera un elemento por cada dato.
      Aquí se muestra una lista de frutas que puedes ampliar.
    </p>

    <form @submit.prevent="agregarFruta">
      <label for="fruta">Nueva fruta:</label>

      <input
        id="fruta"
        v-model="nuevaFruta"
        placeholder="Ejemplo: Pera"
      />

      <button type="submit">Agregar</button>
    </form>

    <div class="resultado">
      <ul>
        <li v-for="fruta in frutas" :key="fruta.id">
          {{ fruta.nombre }}
        </li>
      </ul>
    </div>

    <h3>Código del ejemplo</h3>
    <pre><code>{{ ejemplo }}</code></pre>
  </section>
</template>
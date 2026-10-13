<script setup>
import { ref } from 'vue'

const tareas = ref([
  { id: 101, texto: 'Estudiar Vue' },
  { id: 102, texto: 'Crear las rutas' },
  { id: 103, texto: 'Publicar el proyecto' },
])

function invertirOrden() {
  tareas.value.reverse()
}

const ejemplo = `<li v-for="tarea in tareas" v-bind:key="tarea.id">
  <input v-model="tarea.texto" />
</li>`
</script>

<template>
  <section>
    <h2>v-bind:key dentro de un bucle</h2>

    <p>
      key identifica cada elemento con una clave única y estable.
      Así Vue mantiene la identidad de los elementos cuando cambia
      su orden. La escritura abreviada de v-bind:key es :key.
    </p>

    <button @click="invertirOrden">Invertir orden</button>

    <div class="resultado">
      <ul>
        <li v-for="tarea in tareas" v-bind:key="tarea.id">
          <label :for="'tarea-' + tarea.id">
            Tarea {{ tarea.id }}:
          </label>

          <input
            :id="'tarea-' + tarea.id"
            v-model="tarea.texto"
          />
        </li>
      </ul>
    </div>

    <h3>Código del ejemplo</h3>
    <pre><code>{{ ejemplo }}</code></pre>
  </section>
</template>
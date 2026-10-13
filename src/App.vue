<script setup>
import { ref } from 'vue'

const contador = ref(0)
</script>

<template>
  <header>
    <h1>Aprende Vue</h1>
    <p>Proyecto Unidad 3 · Directivas y navegación SPA</p>
  </header>

  <nav aria-label="Menú principal">
    <router-link to="/condicional">Condicionales</router-link>
    <router-link to="/mostrar">v-show</router-link>
    <router-link to="/lista">v-for</router-link>
    <router-link to="/claves">v-bind:key</router-link>
  </nav>

  <section class="prueba">
    <span>Prueba de navegación SPA: {{ contador }}</span>

    <button @click="contador++">Aumentar contador</button>

    <small>
      Aumenta el contador y cambia de página: su valor se conserva.
    </small>
  </section>

  <main>
    <router-view />
  </main>

  
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f7f2fc;
  color: #30213f;
  line-height: 1.6;
}

header {
  padding: 30px 16px;
  text-align: center;
  background: #73509c;
  color: white;
}

header h1 {
  margin: 0 0 12px;
}

nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
}

nav a {
  padding: 12px 18px;
  border-radius: 10px;
  background: #e7d9f4;
  color: #493164;
  text-decoration: none;
}

nav a.router-link-active {
  background: #73509c;
  color: white;
}

main,
.prueba {
  width: min(850px, 92%);
  margin: 20px auto;
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 16px #30213f12;
}

.prueba {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

small {
  width: 100%;
}

button {
  padding: 10px 16px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  background: #73509c;
  color: white;
  font: inherit;
  cursor: pointer;
}

input,
select {
  max-width: 100%;
  padding: 10px;
  margin: 8px;
  border: 1px solid #bca7ce;
  border-radius: 8px;
  font: inherit;
}

.resultado {
  margin-top: 18px;
  padding: 18px;
  border-radius: 10px;
  background: #efe5f8;
}

li {
  margin: 12px 0;
}

pre {
  overflow-x: auto;
  padding: 16px;
  border-radius: 10px;
  background: #30213f;
  color: white;
}

footer {
  padding: 24px;
  text-align: center;
}
</style>
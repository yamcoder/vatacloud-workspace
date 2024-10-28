<template>
  <nav class="sidebar">
    <h2>Time Zones</h2>
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="nav-link"
    >
      {{ route.label }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
const routes = [
  { path: '/tokyo', label: 'Tokyo Time' },
  { path: '/moscow', label: 'Moscow Time' },
];
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f5f5f5;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #e0e0e0;
}

.nav-link.router-link-active {
  background-color: #42b883;
  color: white;
}
</style>

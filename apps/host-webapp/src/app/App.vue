<template>
  <div class="app-container">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>

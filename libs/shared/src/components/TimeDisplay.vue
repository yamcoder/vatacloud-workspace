<template>
  <div class="time-display">
    <h2>{{ title }}</h2>
    <div class="time">
      {{ time }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useTimeDisplay, type TimeZoneConfig } from '../utils/time-display';

const props = defineProps<{
  config: TimeZoneConfig;
  title: string;
}>();

const time = ref('');
let timer: number;

const { getFormattedTime } = useTimeDisplay(props.config);

const updateTime = () => {
  time.value = getFormattedTime();
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.time-display {
  padding: 2rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  text-align: center;
}

.time {
  font-size: 3rem;
  font-weight: bold;
  color: #42b883;
  margin-top: 1rem;
}
</style>

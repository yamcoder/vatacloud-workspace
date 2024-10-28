<template>
  <TimeDisplay :config="config" title="Current Time in Moscow" />
</template>

<script setup lang="ts">
import { TimeDisplay } from '@vatacloud-workspace/shared';

const config = {
  zone: 'Europe/Moscow',
  label: 'Moscow Time'
};
</script>

<template>
  <TimeDisplay :config="config" title="Current Time in Tokyo" />
</template>

<script setup lang="ts">
import { TimeDisplay } from '@vatacloud-workspace/shared';

const config = {
  zone: 'Asia/Tokyo',
  label: 'Tokyo Time'
};
</script>

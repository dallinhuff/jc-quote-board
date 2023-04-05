<script setup lang="ts">
defineProps<{ title: string; body: string; buttonText: string }>();
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ title }}</h1>
        <p class="py-6">{{ body }}</p>
        <button @click="$emit('action')" class="btn btn-primary">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

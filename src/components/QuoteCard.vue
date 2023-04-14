<script setup lang="ts">
const { body, reference, link } = defineProps<{
  body: string;
  reference: string;
  link?: string;
}>();
</script>

<template>
  <div class="card w-96 bg-base-300 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-4xl font-serif">&#8220;</h2>
      <div class="prose" v-html="body"></div>
      <p></p>
      <div class="card-actions justify-end">
        <a :href="link || ''" target="_blank" class="btn btn-secondary">{{
          reference
        }}</a>
      </div>
    </div>
  </div>
</template>
